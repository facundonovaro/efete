import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserTransactions } from "../../redux/store/actions/transactions";
import UserHome from "./userHome";
import moment from "moment/min/moment-with-locales";
import esLocale from 'moment/locale/es'

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [loading, setLoader] = useState(false);
  const [time, setTime] = useState("");

  const userTransactions = useSelector(
    (state) => state.transactions.userTransactions
  );
  
  
  const mode = useSelector(
    (state) => state.users.mode
  );


  const userRole = useSelector((state) => state.users.user.role);

  useEffect(() => {
    var date = moment();
    var fecha = date.locale('es', esLocale).format("dddd MM-MMMM");

    setTime(fecha);
  });

  useEffect(() => {
    dispatch(getUserTransactions(route.params.user)).then(() =>
      setLoader(true)
    )
  }, []);

  return (
    <UserHome
      mode={mode}
      navigation={navigation}
      loading={loading}
      userRole={userRole}
      time={time}
      userTransactions={userTransactions}
    />
  );
};
