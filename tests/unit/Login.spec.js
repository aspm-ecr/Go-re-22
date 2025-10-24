import { render, fireEvent } from "@testing-library/vue";
import Login from "@/views/Login.vue";
import Vuex from "vuex";
import Vue from "vue";

// Set up Vue to use Vuex
Vue.use(Vuex);

describe("Login.vue", () => {
  let store;
  let actions;

  beforeEach(() => {
    // Set up Vuex store with mock login action
    actions = {
      login: jest.fn(),
    };

    store = new Vuex.Store({
      actions,
    });
  });

  const renderLogin = () => {
    return render(Login, {
      store,
    });
  };

  it("renders login form correctly", () => {
    const { getByText, getByLabelText, getByRole } = renderLogin();

    // Check title and form elements
    expect(getByRole("heading", { name: "Login" })).toBeTruthy();
    expect(getByLabelText("Username")).toBeTruthy();
    expect(getByLabelText("Password")).toBeTruthy();
    expect(getByRole("button", { name: "Login" })).toBeTruthy();
  });

  it("shows guidance for obtaining credentials", () => {
    const { getByText } = renderLogin();

    expect(
      getByText("Use the environment credentials provided by your administrator.")
    ).toBeTruthy();
  });

  it("allows user input in form fields", async () => {
    const { getByLabelText } = renderLogin();

    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    const username = "testuser";
    const password =
      process.env.VUE_APP_LOGIN_PASSWORD ?? "user-input-placeholder";

    await fireEvent.update(usernameInput, username);
    await fireEvent.update(passwordInput, password);

    expect(usernameInput.value).toBe(username);
    expect(passwordInput.value).toBe(password);
  });

  it("calls login action with form data when submitted", async () => {
    const { getByLabelText, getByRole } = renderLogin();

    // Fill in the form
    const username = "testuser";
    const password =
      process.env.VUE_APP_LOGIN_PASSWORD ?? "user-input-placeholder";

    await fireEvent.update(getByLabelText("Username"), username);
    await fireEvent.update(getByLabelText("Password"), password);

    // Submit the form
    await fireEvent.click(getByRole("button", { name: "Login" }));

    // Verify login action was called with correct data
    expect(actions.login).toHaveBeenCalledWith(expect.anything(), {
      username,
      password,
    });
  });

  it("requires username and password fields", () => {
    const { getByLabelText } = renderLogin();

    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");

    expect(usernameInput.hasAttribute("required")).toBe(true);
    expect(passwordInput.hasAttribute("required")).toBe(true);
  });

  it("uses password type for password field", () => {
    const { getByLabelText } = renderLogin();

    const passwordInput = getByLabelText("Password");
    expect(passwordInput.getAttribute("type")).toBe("password");
  });

  it("prevents default form submission", async () => {
    const { container, getByRole } = renderLogin();
    const form = container.querySelector("form");
    const submitEvent = new Event("submit");
    const preventDefault = jest.fn();
    submitEvent.preventDefault = preventDefault;

    form.dispatchEvent(submitEvent);

    expect(preventDefault).toHaveBeenCalled();
  });
});
