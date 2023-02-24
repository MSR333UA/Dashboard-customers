import React from "react";

export const Dashboard = () => {
  return (
    <main>
      <div>
        <section>
          <h3>Sidebar section</h3>
          <div>
            <div>
              <p>
                Dashboard <span>v.01</span>
              </p>
            </div>

            <div>
              <ul>
                <li>
                  <a>Dashboard</a>
                </li>
                <li>
                  <a>Product</a>
                </li>
                <li>
                  <a>Customers</a>
                </li>
                <li>
                  <a>Income</a>
                </li>
                <li>
                  <a>Promote</a>
                </li>
                <li>
                  <a>Help</a>
                </li>
              </ul>

              <ul>
                <li>
                  <img />
                  <div>
                    <p>Evano</p>
                    <p>Project Manager</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h1>Hello Evano 👋🏼,</h1>
          <button type="button" data-menu-button>
            Menu
          </button>

          <div>
            <div>
              <div>
                <h2>All Customers</h2>
                <p>Active Members</p>
              </div>

              <form>
                <input />
              </form>
            </div>

            <div>
              <table>
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Company</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Jane Cooper</td>
                    <td>Microsoft</td>
                    <td>(225) 555-0118</td>
                    <td>jane@microsoft.com</td>
                    <td>United States</td>
                    <td>
                      <span>Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Floyd Miles</td>
                    <td>Yahoo</td>
                    <td>(205) 555-0100</td>
                    <td>floyd@yahoo.com</td>
                    <td>Kiribati</td>
                    <td>
                      <span>Inactive</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Ronald Richards</td>
                    <td>Adobe</td>
                    <td>(302) 555-0107</td>
                    <td>ronald@adobe.com</td>
                    <td>Israel</td>
                    <td>
                      <span>Inactive</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Marvin McKinney</td>
                    <td>Tesla</td>
                    <td>(252) 555-0126</td>
                    <td>marvin@tesla.com</td>
                    <td>Iran</td>
                    <td>
                      <span>Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Jerome Bell</td>
                    <td>Google</td>
                    <td>(629) 555-0129</td>
                    <td>jerome@google.com</td>
                    <td>Réunion</td>
                    <td>
                      <span>Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Kathryn Murphy</td>
                    <td>Microsoft</td>
                    <td>(406) 555-0120</td>
                    <td>kathryn@microsoft.com</td>
                    <td>Curaçao</td>
                    <td>
                      <span>Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Jacob Jones</td>
                    <td>Yahoo</td>
                    <td>(208) 555-0112</td>
                    <td>jacob@yahoo.com</td>
                    <td>Brazil</td>
                    <td>
                      <span>Active</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Kristin Watson</td>
                    <td>Facebook</td>
                    <td>(704) 555-0127</td>
                    <td>kristin@facebook.com</td>
                    <td>Åland Islands</td>
                    <td>
                      <span>Inactive</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p>Showing data 1 to 8 of 256K entries</p>
              <ul>
                <li>
                  <a></a>
                </li>
                <li>
                  <a>1</a>
                </li>
                <li>
                  <a>2</a>
                </li>
                <li>
                  <a>3</a>
                </li>
                <li>
                  <a>4</a>
                </li>
                <li>
                  <a></a>
                </li>
                <li>
                  <a>40</a>
                </li>
                <li>
                  <a></a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
