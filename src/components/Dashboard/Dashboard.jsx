import React from "react";
import avatar from "../../assets/img/avatar.png";
import sprite from "../../assets/img/sprite.svg";

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
                <li className="nav__item">
                  <a className="nav__link" href="/">
                    <svg className="nav__icon">
                      <use href={`${sprite}#icon-key-square`}></use>
                    </svg>
                    Dashboard
                    <svg className="nav__icon--arrow-right">
                      <use href={`${sprite}#icon-chevron`}></use>
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/">
                    <svg className="nav__icon">
                      <use href={`${sprite}#icon-3d-square`}></use>
                    </svg>
                    Product
                    <svg className="nav__icon--arrow-right">
                      <use href={`${sprite}#icon-chevron`}></use>
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link nav__link--active" href="/">
                    <svg className="nav__icon">
                      <use href={`${sprite}#icon-user-square`}></use>
                    </svg>
                    Customers
                    <svg className="nav__icon--arrow-right">
                      <use href={`${sprite}#icon-chevron`}></use>
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/">
                    <svg className="nav__icon">
                      <use href={`${sprite}#icon-wallet-money`}></use>
                    </svg>
                    Income
                    <svg className="nav__icon--arrow-right">
                      <use href={`${sprite}#icon-chevron`}></use>
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/">
                    <svg className="nav__icon">
                      <use href={`${sprite}#icon-discount`}></use>
                    </svg>
                    Promote
                    <svg className="nav__icon--arrow-right">
                      <use href={`${sprite}#icon-chevron`}></use>
                    </svg>
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/">
                    <svg className="nav__icon">
                      <use href={`${sprite}#icon-message-question`}></use>
                    </svg>
                    Help
                    <svg className="nav__icon--arrow-right">
                      <use href={`${sprite}#icon-chevron`}></use>
                    </svg>
                  </a>
                </li>
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
                  <tr>
                    <td>Jane Cooper</td>
                    <td>Microsoft</td>
                    <td>(225) 555-0118</td>
                    <td>jane@microsoft.com</td>
                    <td>United States</td>
                    <td>
                      <span className="table__active">Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Floyd Miles</td>
                    <td>Yahoo</td>
                    <td>(205) 555-0100</td>
                    <td>floyd@yahoo.com</td>
                    <td>Kiribati</td>
                    <td>
                      <span className="table__inactive">Inactive</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Ronald Richards</td>
                    <td>Adobe</td>
                    <td>(302) 555-0107</td>
                    <td>ronald@adobe.com</td>
                    <td>Israel</td>
                    <td>
                      <span className="table__inactive">Inactive</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Marvin McKinney</td>
                    <td>Tesla</td>
                    <td>(252) 555-0126</td>
                    <td>marvin@tesla.com</td>
                    <td>Iran</td>
                    <td>
                      <span className="table__active">Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Jerome Bell</td>
                    <td>Google</td>
                    <td>(629) 555-0129</td>
                    <td>jerome@google.com</td>
                    <td>Réunion</td>
                    <td>
                      <span className="table__active">Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Kathryn Murphy</td>
                    <td>Microsoft</td>
                    <td>(406) 555-0120</td>
                    <td>kathryn@microsoft.com</td>
                    <td>Curaçao</td>
                    <td>
                      <span className="table__active">Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Jacob Jones</td>
                    <td>Yahoo</td>
                    <td>(208) 555-0112</td>
                    <td>jacob@yahoo.com</td>
                    <td>Brazil</td>
                    <td>
                      <span className="table__active">Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Kristin Watson</td>
                    <td>Facebook</td>
                    <td>(704) 555-0127</td>
                    <td>kristin@facebook.com</td>
                    <td>Åland Islands</td>
                    <td>
                      <span className="table__inactive">Inactive</span>
                    </td>
                  </tr>
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
                <li className="pagination__item">
                  <a
                    className="pagination__link pagination__link--active"
                    href="/"
                  >
                    1
                  </a>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="/">
                    2
                  </a>
                </li>
                <li className="pagination__item pagination__item--disable">
                  <a className="pagination__link" href="/">
                    3
                  </a>
                </li>
                <li className="pagination__item pagination__item--disable">
                  <a className="pagination__link" href="/">
                    4
                  </a>
                </li>
                <li className="pagination__item">
                  <a
                    className="pagination__link pagination__link--nobg"
                    href="/"
                  >
                    &hellip;
                  </a>
                </li>
                <li className="pagination__item">
                  <a className="pagination__link" href="/">
                    40
                  </a>
                </li>
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
