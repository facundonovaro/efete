import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logUser, verifyEmail } from "../../redux/store/actions/users";
import Login from "./Login";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const mode = useSelector((state) => state.users.mode);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isData, setIsData] = useState(true);
  const [data, setData] = useState({ secureTextEntry: true });
  const [notVerified, setNotVerified] = useState(false);

  const handleValueUsername = (username) => {
    setUsername(username);
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValuePassword = (password) => {
    setPassword(password);
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const handleIsData = () => {
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const handleSubmit = () => {
    dispatch(logUser({ username: username, password: password })).then(
      (data) => {
        if (data.user && data.user.isVerified && !data.user.validatedIdentity) {
          navigation.navigate("ValidateIdentity");
        }
        if (data.user && data.user.isVerified && data.user.validatedIdentity) {
          navigation.navigate("User", { user: data.user._id });
        }
        if (data.user && !data.user.isVerified) {
          setNotVerified(true);
        }
      }
    );
  };

  const handleVerifyAccount = () => {
    dispatch(verifyEmail(user._id)).then(() => {
      navigation.navigate("Verificar");
      setNotVerified(false);
    });
  };

  return (
    <Login
      isData={isData}
      handleIsData={handleIsData}
      handleValueUsername={handleValueUsername}
      handleValuePassword={handleValuePassword}
      handleSubmit={handleSubmit}
      username={username}
      password={password}
      user={user}
      navigation={navigation}
      handleVerifyAccount={handleVerifyAccount}
      updateSecureTextEntry={updateSecureTextEntry}
      data={data}
      mode={mode}
      notVerified={notVerified}
    />
  );
};
