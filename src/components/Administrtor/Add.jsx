import { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import { CreateAdministratorServices } from "../../services/services";
import { isEmpty } from "lodash";

function Add({ onCancel, mode, initialValue }) {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("MASTER");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [pages, setPages] = useState([]);

  const handlePages = (page, checked) => {
    let tempPage = pages;

    console.log({tempPage})
    //  check add the element to the array
    if (checked) {
      tempPage.push(page);
    }
    //  check is false remove the element from the array
    if (checked === false) {
      tempPage = tempPage.filter((item) => item !== page);
    }

    setPages(tempPage);
  };

  const createAdministrator = async () => {
    const administratorService = new CreateAdministratorServices();
    const data = {
      name,
      team,
      password,
      id,
      access: pages,
      role: role?.toUpperCase(),
    };
    await administratorService.createAdmin(data);
    onCancel();
  };

  useEffect(() => {
    console.log({initialValue})
    if (!isEmpty(initialValue)) {
      setId(initialValue.id);
      setRole(initialValue.role);
      setName(initialValue.name);
      setTeam(initialValue.team);
      setPages(initialValue?.access? initialValue.access: []);
    } else
      setPages([
        "Dashboard",
        "Homepage",
        "Banner",
        "Order",
        "User",
        "NFTs",
        "Curation",
        "Category",
        "Fee",
        "Tooltip",
        "Translation",
        "Network",
        "Administrator",
      ]);
  }, [initialValue]);
  return (
    <>
      <div className="dashboard__admin__area">
        <div className="admin__inner__blk">
          <div className="admin__content">
            <h4>
              Administrator Management &gt; {mode === "add" ? "Add" : "Edit"}{" "}
              Administrator
            </h4>
          </div>
        </div>
      </div>
      <div className="common__edit__proe__wrap mt-30">
        <div className="edit__profilfile__inner__top__blk border-0 pb-0">
          <div className="edit__profile__inner__title">
            <h5>Authority</h5>
          </div>
        </div>
        <div className="edit__profile__form">
          <div className="row gy-4 gx-3">
            <div className="col-12">
              <div className="categorie__select select_black_bg">
                {/* <label htmlFor="#">Country*</label> */}
                <div className="categorie__select select_black_bg">
                  <Dropdown
                    data={["ADMIN", "MASTER"]}
                    setValue={setRole}
                    value={role}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="common__edit__proe__wrap mt-30">
        <div className="edit__profile__form">
          <div className="row gy-4 gx-3">
            <div className="col-md-6">
              <div className="single__edit__profile__step">
                <label htmlFor="#">ID*</label>
                <input
                  type="text"
                  placeholder="Enter ID*"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single__edit__profile__step">
                <label htmlFor="#">Password</label>
                <input
                  type="text"
                  placeholder="Create Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single__edit__profile__step">
                <label htmlFor="#">Name*</label>
                <input
                  type="text"
                  placeholder="Enter Name*"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="single__edit__profile__step">
                <label htmlFor="#">Team</label>
                <input
                  type="text"
                  placeholder="Email Team*"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="common__edit__proe__wrap mt-30">
        <div className="edit__profilfile__inner__top__blk">
          <div className="edit__profile__inner__title">
            <h5>Accessible Page</h5>
          </div>
        </div>
        <div className="edit__profile__form">
          <div className="row g-4">
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>Dashboard</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Dashboard")}
                        onChange={(e) =>
                          handlePages("Dashboard", e.target.checked)
                        }
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="single__accessible__list">
                  <p>Homepage</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Homepage")}
                        onChange={(e) =>
                          handlePages("Homepage", e.target.checked)
                        }
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                <div className="single__accessible__list">
                  <p>Banner</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Banner")}
                        onChange={(e) =>
                          handlePages("Banner", e.target.checked)
                        }
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
                {/* <div className="single__accessible__list">
                <p>Dashboard</p>
                <div className="codeplay-ck">
                  <label className="container-ck">
                    <input type="checkbox" checked="checked" onChange={(e) => handlePages('Dashboard',e.target.checked)}/>
                    <span className="checkmark" />
                  </label>
                </div>
              </div> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>Order</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Order")}
                        onChange={(e) => handlePages("Order", e.target.checked)}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>User</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("User")}
                        onChange={(e) => handlePages("User", e.target.checked)}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>NFTs</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("NFTs")}
                        onChange={(e) => handlePages("NFTs", e.target.checked)}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>Curation</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Curation")}
                        onChange={(e) =>
                          handlePages("Curation", e.target.checked)
                        }
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>Category</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Category")}
                        onChange={(e) =>
                          handlePages("Category", e.target.checked)
                        }
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>Fee</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Fee")}
                        onChange={(e) => handlePages("Fee", e.target.checked)}
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>Tooltip</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Tooltip")}
                        onChange={(e) =>
                          handlePages("Tooltip", e.target.checked)
                        }
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>Translation</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Translation")}
                        onChange={(e) =>
                          handlePages("Translation", e.target.checked)
                        }
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>Network</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Network")}
                        onChange={(e) =>
                          handlePages("Network", e.target.checked)
                        }
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="accessible__list__check">
                <div className="single__accessible__list">
                  <p>Administrator</p>
                  <div className="codeplay-ck">
                    <label className="container-ck">
                      <input
                        type="checkbox"
                        checked={pages?.includes("Administrator")}
                        value={false}
                        onChange={(e) =>
                          handlePages("Administrator", e.target.checked)
                        }
                      />
                      <span className="checkmark" />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="edit__profile__bottom__btn half__width__btn">
        <a href="#" className="cancel" onClick={onCancel}>
          Discard
        </a>
        <a href="#" onClick={createAdministrator}>
          Next{" "}
          <span>
            <img src="assets/img/arrow_ico.svg" alt="" />
          </span>
        </a>
      </div>
    </>
  );
}

export default Add;
