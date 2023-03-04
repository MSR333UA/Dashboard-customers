import React from "react";
import "./Dashboard.css";
import avatar from "../../assets/img/avatar.png";
import sprite from "../../assets/img/sprite.svg";

const icons = [
  { href: "/", icon: "icon-key-square", label: "Dashboard" },
  { href: "/", icon: "icon-3d-square", label: "Product" },
  { href: "/", icon: "icon-user-square", label: "Customers", active: true },
  { href: "/", icon: "icon-wallet-money", label: "Income" },
  { href: "/", icon: "icon-discount", label: "Promote" },
  { href: "/", icon: "icon-message-question", label: "Help" },
];

const customers = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phoneNumber: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phoneNumber: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phoneNumber: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phoneNumber: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phoneNumber: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phoneNumber: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phoneNumber: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phoneNumber: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];

const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "...", 40];

export const Dashboard = () => {
  return (
    <main>
      <div className="container">
        <section
          className="section-sidebar container__section-sidebar"
          data-menu
        >
          <h3 className="visually-hidden">Sidebar section</h3>
          <div className="sidebar">
            <div className="logo sidebar__logo">
              <svg className="logo__icon">
                <use href={`${sprite}#icon-logo`}></use>
              </svg>
              <p className="logo__text">
                Dashboard <span className="logo__text--small-text">v.01</span>
              </p>
            </div>
            <div className="nav-content">
              <ul className="nav">
                {icons.map((item) => (
                  <li className="nav__item" key={item.label}>
                    <a
                      className={`nav__link${
                        item.active ? " nav__link--active" : ""
                      }`}
                      href={item.href}
                    >
                      <svg className="nav__icon">
                        <use href={`${sprite}#${item.icon}`}></use>
                      </svg>
                      {item.label}
                      <svg className="nav__icon--arrow-right">
                        <use href={`${sprite}#icon-chevron`}></use>
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>

              <ul className="user">
                <li className="user__item">
                  <img className="user__img" src={avatar} alt="avatar" />
                  <div>
                    <p className="user-description__name">Evano</p>
                    <p className="user-description__job">Project Manager</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-dashboard">
          <h1 className="title">Hello Evano 👋🏼,</h1>
          <button
            type="button"
            className="button-menu section-dashboard__button-menu"
            data-menu-button
          >
            Menu
          </button>

          <div className="table-container section-dashboard__table-container">
            <div className="table-description section-dashboard__table-description">
              <div>
                <h2 className="table-description__title">All Customers</h2>
                <p className="table-description__text">Active Members</p>
              </div>

              <form className="form">
                <input
                  placeholder="Search"
                  className="form__input"
                  type="text"
                />
                <svg className="form__icon">
                  <use href={`${sprite}#icon-search`}></use>
                </svg>
              </form>
            </div>

            <div className="scroll-table">
              <table className="table">
                <thead className="table__head">
                  <tr>
                    <th>Customer Name</th>
                    <th>Company</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody className="table__body">
                  {customers.map((customer) => (
                    <tr key={customer.email}>
                      <td>{customer.name}</td>
                      <td>{customer.company}</td>
                      <td>{customer.phoneNumber}</td>
                      <td>{customer.email}</td>
                      <td>{customer.country}</td>
                      <td>
                        <span
                          className={`table__${customer.status.toLocaleLowerCase()}`}
                        >
                          {customer.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="table-footer section-dashboard__table-footer">
              <p className="table-footer__text">
                Showing data 1 to 8 of 256K entries
              </p>
              <ul className="pagination">
                <li className="pagination__item">
                  <a className="pagination__link" href="/">
                    <svg className="pagination__icon pagination__icon-rotare">
                      <use xlinkHref={`${sprite}#icon-chevron`}></use>
                    </svg>
                  </a>
                </li>

                {pageNumbers.map((pageNumber, index) => (
                  <li
                    key={index}
                    className={`pagination__item ${
                      pageNumber === "..." ? "pagination__item--disable" : ""
                    }`}
                  >
                    <a
                      className={`pagination__link ${
                        pageNumber === 1 ? "pagination__link--active" : ""
                      } ${
                        pageNumber === "..." ? "pagination__link--nobg" : ""
                      }`}
                      href="/"
                    >
                      {pageNumber}
                    </a>
                  </li>
                ))}

                <li className="pagination__item">
                  <a className="pagination__link" href="/">
                    <svg className="pagination__icon" width="8px" height="12px">
                      <use href={`${sprite}#icon-chevron`}></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
