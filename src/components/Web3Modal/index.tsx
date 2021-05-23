import React, { Fragment, useEffect, useState } from "react";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import MetamaskIcon from "../../assests/connectors/metamask-logo.png";
import { Close } from "@material-ui/icons";
import { injected } from "../../connectors";
import { SUPPORTED_WALLETS } from "../../constants";
import usePrevious from "../../hooks/usePrevious";
import { ApplicationModal } from "../../state/app/actions";
import { useModalOpen, useWalletModalToggle } from "../../state/app/hooks";

import Modal from "../Modal";
import { IconButton } from "@material-ui/core";

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalHeading = styled.h2`
  color: #222;
  font-weight: 800;
  font-size: 16px;
`;

const ModalContent = styled.div`
  padding: 1rem;
`;

const Provider = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  border: 0px;
`;

const ConnectorLogo = styled.img`
  width: 25px;
  margin-right: 10px;
`;

const ConnectorName = styled.h5`
  color: #222;
  font-weight: 800;
  font-size: 16px;
`;

declare const window: any;

const WALLET_VIEWS = {
  OPTIONS: "options",
  OPTIONS_SECONDARY: "options_secondary",
  ACCOUNT: "account",
  PENDING: "pending",
};

export default function WalletModal() {
  // important that these are destructed from the account-specific web3-react context
  const { active, account, connector, activate, error } = useWeb3React();

  const [walletView, setWalletView] = useState(WALLET_VIEWS.ACCOUNT);

  const [pendingWallet, setPendingWallet] =
    useState<AbstractConnector | undefined>();

  const [pendingError, setPendingError] = useState<boolean>();

  const walletModalOpen = useModalOpen(ApplicationModal.WALLET);
  const toggleWalletModal = useWalletModalToggle();

  const previousAccount = usePrevious(account);

  // close on connection, when logged out before
  useEffect(() => {
    if (account && !previousAccount && walletModalOpen) {
      toggleWalletModal();
    }
  }, [account, previousAccount, toggleWalletModal, walletModalOpen]);

  // always reset to account view
  useEffect(() => {
    if (walletModalOpen) {
      setPendingError(false);
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [walletModalOpen]);

  // close modal when a connection is successful
  const activePrevious = usePrevious(active);
  const connectorPrevious = usePrevious(connector);
  useEffect(() => {
    if (
      walletModalOpen &&
      ((active && !activePrevious) ||
        (connector && connector !== connectorPrevious && !error))
    ) {
      setWalletView(WALLET_VIEWS.ACCOUNT);
    }
  }, [
    setWalletView,
    active,
    error,
    connector,
    walletModalOpen,
    activePrevious,
    connectorPrevious,
  ]);

  const tryActivation = async (connector: AbstractConnector | undefined) => {
    let name = "";
    Object.keys(SUPPORTED_WALLETS).map((key) => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        return (name = SUPPORTED_WALLETS[key].name);
      }
      return true;
    });

    setPendingWallet(connector); // set wallet for pending view
    setWalletView(WALLET_VIEWS.PENDING);

    // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
    if (
      connector instanceof WalletConnectConnector &&
      connector.walletConnectProvider?.wc?.uri
    ) {
      connector.walletConnectProvider = undefined;
    }

    connector &&
      activate(connector, undefined, true).catch((error) => {
        if (error instanceof UnsupportedChainIdError) {
          activate(connector); // a little janky...can't use setError because the connector isn't set
        } else {
          setPendingError(true);
        }
      });
  };

  // get wallets user can switch too, depending on device/browser
  function getOptions() {
    const isMetamask = window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key];
      // check for mobile options
      return (
        <Provider key={key} onClick={() => tryActivation(option.connector)}>
          <ConnectorLogo src={option.iconURL} alt={option.name} />
          <ConnectorName>{option.name}</ConnectorName>
        </Provider>
      );
    });
  }

  function getModalContent() {
    return (
      <Fragment>
        <ModalWrapper>
          <ModalHeading>Wallet Connection</ModalHeading>
          <IconButton>
            <Close />
          </IconButton>
        </ModalWrapper>
        <ModalContent>{getOptions()}</ModalContent>
      </Fragment>
    );
  }

  return (
    <Modal isOpen={walletModalOpen} close={toggleWalletModal}>
      <>{getModalContent()}</>
    </Modal>
  );
}
