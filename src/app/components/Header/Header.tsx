"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, MenuProps } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";

// You'll need to create this CustomButton component
import { CustomButton } from "..";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/business-travel-to-africa">To Africa</Link>,
  },
  {
    key: "2",
    label: <Link href="/relocation-from-africa">From Africa</Link>,
  },
];

const miraItems: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/mira-for-agencies" prefetch={false}>For Agencies</Link>,
  },
  {
    key: "2",
    label: <Link href="/mira-for-employers" prefetch={false}>For Employers</Link>,
  },
];

const Header = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <header className="website-header z-50">
      <div className="header-sub">
        <div className="con">
          <Link href={"/"}>
            <Image
              src={"/images/logos/logo_no_bg_workabroad.png"}
              alt=""
              height={100}
              width={147}
            />
          </Link>
          <nav className={`${showNav ? "show" : ""}`}>
            <ul>
              <li>
                <Link href={"/"} className={`link`}>
                  <span>{"Home"}</span>
                </Link>
              </li>
              <li>
                <Dropdown
                  menu={{ items: miraItems }}
                  placement="bottom"
                >
                  <div className={`link`}>
                    <div className="flex items-center gap-2">
                      {"Mira Ai"}
                      <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                  </div>
                </Dropdown>
              </li>
              <li>
                <Link href={"/wiki"} className={`link`}>
                  <span>{"wiki"}</span>
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link href={"https://app.useconsul.com/"} target="_blank">
                <CustomButton
                  text="Create Free Account!"
                  skin="primary"
                  type="button"
                />
              </Link>
              <Link
                href={"https://cal.com/shaneyankam/workabroad-demo"}
                target="_blank"
              >
                <CustomButton
                  text="Schedule demo"
                  skin="border"
                  type="button"
                />
              </Link>
            </div>
          </nav>
          <CustomButton
            skin="transparent"
            type="button"
            icon={<FontAwesomeIcon icon={faBars} />}
            onClick={() => setShowNav(!showNav)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;