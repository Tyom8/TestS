"use client";
import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import ArrowLeft from "@/app/assets/svgs/arrowLeft.svg";
import SearchIcon from "@/app/assets/svgs/searchIcon.svg";
import industriesCardHooks from "./industriesCard.hooks";
import InputField from "../inputField/inputField";
import MainButton from "../mainButton/mainButton";
import styles from "./industriesCard.module.css";

const IndustriesCard: React.FC = () => {
  const {
    isFocusedInput,
    setIsFocusedInput,
    industriesData,
    searchValue,
    setSearchValue,
    selectedIndustries,
    handleSelectIndustry,
  } = industriesCardHooks();
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Image src={ArrowLeft} alt="icon" />
        <span className={styles.title}>
          Tell about the industries you work in
        </span>
      </div>
      <span className={styles.description}>
        To help us personalize your experience and grow visibility, choose up to
        3 pre-defined using the search:
      </span>
      <div className={styles.contentContainer}>
        <div className={styles.industriesContainer}>
          <InputField
            type="email"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholderText={"Type an industry name to add"}
            leftIcon={SearchIcon}
            onFocus={() => setIsFocusedInput(true)}
            onBlur={() => {
              setTimeout(() => {
                setIsFocusedInput(false);
              }, 200);
            }}
            containerStyle={styles.inputContainer}
          />
          {isFocusedInput ? (
            <div className={styles.selectContainer}>
              {industriesData?.map((item) => {
                return (
                  <span
                    key={item.id}
                    onClick={() => {
                      handleSelectIndustry(item.id);
                    }}
                    className={styles.selectItem}
                  >
                    {item.name}
                  </span>
                );
              })}
            </div>
          ) : selectedIndustries.length ? (
            <>
              <div className={styles.selectedInfoContainer}>
                <span className={styles.selectedCountText}>
                  You selected
                  <span
                    style={{ fontWeight: "400" }}
                  >{` (${selectedIndustries.length} out of 3):`}</span>
                </span>
                <div className={styles.selectedListContainer}>
                  {industriesData?.map((item) => {
                    if (selectedIndustries.includes(item.id)) {
                      return (
                        <div
                          key={item.id}
                          onClick={() => {
                            handleSelectIndustry(item.id);
                          }}
                          className={styles.selectedItemContainer}
                        >
                          <span className={styles.selectedItemText}>
                            {item.name}
                          </span>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <span className={styles.industriesText}>Untap to remove.</span>
            </>
          ) : (
            <span className={styles.industriesText}>
              Please use search to choose up to 3 industries.
            </span>
          )}
        </div>
        <div className={styles.dotsContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={index == 2 ? styles.selectedDotsItem : styles.dotsItem}
            ></div>
          ))}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <MainButton
          title={"Continue"}
          onClick={() => {
            selectedIndustries.length
              ? toast.success("Sended!")
              : toast.error("Choose industry for continue!");
          }}
          className={
            selectedIndustries.length ? styles.continueButton : undefined
          }
          disabled={selectedIndustries.length ? false : true}
          selInductries={selectedIndustries.length ? true : false}
        />
      </div>
    </div>
  );
};
export default IndustriesCard;
