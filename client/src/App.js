import React from "react";
import MyToken from "./artifacts/MyToken.json";
import { DrizzleProvider } from "drizzle-react";
import {
  AccountData,
  ContractData,
  ContractForm,
  LoadingContainer,
} from "drizzle-react-components";

const drizzleOptions = {
  contracts: [MyToken],
};

const App = () => (
  <DrizzleProvider options={drizzleOptions}>
    <LoadingContainer>
      <div>
        <h2>hello dapp</h2>
        <div>Your account:</div>
        <AccountData accountIndex={0} units="ether" precision={8} />
        <div>Greeting from blockchain:</div>
        <ContractData contract="MyToken" method="getGreeting" />
        <div>Set greeting value into blockchain:</div>
        <ContractForm contract="MyToken" method="setGreeting" />
      </div>
    </LoadingContainer>
  </DrizzleProvider>
);

export default App;
