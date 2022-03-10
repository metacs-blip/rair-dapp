import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

import "./SplashPage.css";
import "./GreymanSplashPageMobile.css";
import "./../AboutPage/AboutPageNew/AboutPageNew.css";
import Modal from "react-modal";

/* importing images*/
import Metamask from "../../images/metamask-fox.svg";
import DocumentIcon from "../../images/documentIcon.svg";
import SXSW1 from './images/SxSW-IMSV-ATX-2022-Concept01.jpg';
import SXSW2 from './images/SxSW-IMSV-ATX-2022-Concept02.jpg';
import SXSW3 from './images/SxSW-IMSV-ATX-2022-Concept03.jpg';
/* importing Components*/
import TeamMeet from "./TeamMeet/TeamMeetList";
import AuthorBlock from "./AuthorBlock/AuthorBlock";
import MobileCarouselNfts from "../AboutPage/AboutPageNew/ExclusiveNfts/MobileCarouselNfts";
import NotCommercial from "./NotCommercial/NotCommercial";
import setTitle from '../../utils/setTitle';

//Google Analytics
import ReactGA from 'react-ga';

// Google Analytics
const TRACKING_ID = 'UA-209450870-5'; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const customStyles = {
  overlay: {
    zIndex: "1",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    fontFamily: "Plus Jakarta Text",
    borderRadius: "16px",
  },
};

Modal.setAppElement("#root");

const SplashPage = ({ loginDone }) => {
  const [active, setActive] = useState({ policy: false, use: false });
  const { primaryColor } = useSelector((store) => store.colorStore);
  const [modalIsOpen, setIsOpen] = useState(false);
  //   const history = useHistory();
  const {currentUserAddress} = useSelector((store) => store.contractStore);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const carousel_match = window.matchMedia('(min-width: 600px)')
  const [carousel, setCarousel] = useState(carousel_match.matches)
  window.addEventListener("resize", () => setCarousel(carousel_match.matches))
  

  function afterOpenModal() {
    subtitle.style.color = "#9013FE";
  }

  function closeModal() {
    setIsOpen(false);
    setActive((prev) => ({
      ...prev,
      policy: false,
      use: false,
    }));
  }

  let subtitle;

  useEffect(() => {
    setTitle(`#ImmersiVerse ATX`);
  }, [])

  const formHyperlink = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSeSoeMejqA_DntWIJTcJQA4UbWSSUaYfXrj4hFKPPkyzDuByw/viewform',
      '_blank'
    );  
  }

  return (
    <div className="wrapper-splash-page greyman-page">
      <div className="home-splash--page">
        <AuthorBlock mainClass="immersiverse-page-author">
          <div className="block-splash">
            <div className="text-splash">
              <div className="title-splash greyman-page">
                <h3
                  style={{
                    fontSize: "56px",
                    paddingBottom: "17px",
                    marginTop: "1rem",
                  }}
                  className="text-gradient-blue"
                >
                  #ImmersiVerse ATX
                </h3>
              </div>
              <div className="text-description" style={{ color: "#A7A6A6" }}>
                Connect your wallet to receive a free airdrop. Unlock exclusive encrypted streams on drop date
              </div>
              <div className="btn-claim-airdrop">
                <button onClick={() => openModal()}>
                  <img
                    className="metamask-logo"
                    src={Metamask}
                    alt="metamask-logo"
                  />{" "}
                  Claim Airdrop
                </button>
              </div>
              <div className="btn-submit-with-form">

                <button onClick={() => formHyperlink()}>
                  <img
                    className="metamask-logo"
                    src={DocumentIcon}
                    alt="form-logo"
                  />{" "}
                  Submit with Form
                </button>
              </div>
              <div className="btn-timer-nipsey">
                <Modal
                  isOpen={modalIsOpen}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2
                    style={{
                      fontSize: "60px",
                      fontWeight: "bold",
                      paddingTop: "3rem",
                      cursor: "default",
                    }}
                    ref={(_subtitle) => (subtitle = _subtitle)}
                  >
                    Terms of Service
                  </h2>
                  {/* <button onClick={closeModal}>close</button> */}
                  <div className="modal-content-wrapper">
                    <div className="modal-form">
                      <form>
                        <div className="form-group">
                          <input type="checkbox" id="policy" />
                          <label
                            onClick={() =>
                              setActive((prev) => ({
                                ...prev,
                                policy: !prev.policy,
                              }))
                            }
                            htmlFor="policy"
                          >
                            I agree to the{" "}
                          </label>
                          <span
                            onClick={() => window.open("/privacy", "_blank")}
                            style={{
                              color: "#9013FE",
                              fontSize: "24px",
                              paddingRight: "1rem",
                              marginLeft: "-2.5rem",
                            }}
                          >
                            Privacy Policy
                          </span>
                        </div>
                        <div className="form-group sec-group ">
                          <input type="checkbox" className="dgdfgd" id="use" />
                          <label
                            onClick={() =>
                              setActive((prev) => ({ ...prev, use: !prev.use }))
                            }
                            htmlFor="use"
                          >
                            I accept the{" "}
                          </label>
                          <span
                            onClick={() => window.open("/terms-use", "_blank")}
                            style={{
                              color: "#9013FE",
                              fontSize: "24px",
                              paddingRight: "2.3rem",
                              marginLeft: "-2.5rem",
                            }}
                          >
                            Terms of Use
                          </span>
                        </div>
                      </form>
                    </div>
                    <div className="modal-content-np">
                      <div className="modal-btn-wrapper">
                        <div
                          className="modal-btn"
                          // style={{background: '#9013FE'}}
                        >
                          <img
                            style={{ width: "100px", marginLeft: "-1rem" }}
                            className="metamask-logo modal-btn-logo"
                            src={Metamask}
                            alt="metamask-logo"
                          />{" "}
                          { currentUserAddress
                              ? "You're connected!"
                              : "Connect your wallet!"}
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </AuthorBlock>
        {carousel?
              <div className="list-of-greymans-pic">
                <div className="join-pic">
                  <img
                    className="join-pic-img"
                    src={SXSW1}
                    alt="community-img"
                  />
                </div>
                <div className="join-pic">
                  <img
                    className="join-pic-img"
                    src={SXSW2}
                    alt="community-img"
                  />
                </div>
                <div className="join-pic">
                  <img
                    className="join-pic-img"
                    src={SXSW3}
                    alt="community-img"
                  />
                </div>
              </div>
              :
              <div className="exclusive-nfts">
                <MobileCarouselNfts>
                  <img
                    className="join-pic-img"
                    src={SXSW1}
                    alt="community-img"
                  />
                  <img
                    className="join-pic-img"
                    src={SXSW2}
                    alt="community-img"
                  />
                  <img
                    className="join-pic-img"
                    src={SXSW3}
                    alt="community-img"
                  />
                </MobileCarouselNfts>
          </div>
          }
        <TeamMeet primaryColor={primaryColor} arraySplash={"immersiverse"} />
        <NotCommercial primaryColor={primaryColor} />
      </div>
    </div>
  );
};

export default SplashPage;
