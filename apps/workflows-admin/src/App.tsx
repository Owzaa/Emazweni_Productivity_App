import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FormsList } from "./forms/FormsList";
import { FormsCreate } from "./forms/FormsCreate";
import { FormsEdit } from "./forms/FormsEdit";
import { FormsShow } from "./forms/FormsShow";
import { AutomationsList } from "./automations/AutomationsList";
import { AutomationsCreate } from "./automations/AutomationsCreate";
import { AutomationsEdit } from "./automations/AutomationsEdit";
import { AutomationsShow } from "./automations/AutomationsShow";
import { CustomFieldsList } from "./customFields/CustomFieldsList";
import { CustomFieldsCreate } from "./customFields/CustomFieldsCreate";
import { CustomFieldsEdit } from "./customFields/CustomFieldsEdit";
import { CustomFieldsShow } from "./customFields/CustomFieldsShow";
import { CustomStatusesList } from "./customStatuses/CustomStatusesList";
import { CustomStatusesCreate } from "./customStatuses/CustomStatusesCreate";
import { CustomStatusesEdit } from "./customStatuses/CustomStatusesEdit";
import { CustomStatusesShow } from "./customStatuses/CustomStatusesShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Workflows"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Forms"
          list={FormsList}
          edit={FormsEdit}
          create={FormsCreate}
          show={FormsShow}
        />
        <Resource
          name="Automations"
          list={AutomationsList}
          edit={AutomationsEdit}
          create={AutomationsCreate}
          show={AutomationsShow}
        />
        <Resource
          name="CustomFields"
          list={CustomFieldsList}
          edit={CustomFieldsEdit}
          create={CustomFieldsCreate}
          show={CustomFieldsShow}
        />
        <Resource
          name="CustomStatuses"
          list={CustomStatusesList}
          edit={CustomStatusesEdit}
          create={CustomStatusesCreate}
          show={CustomStatusesShow}
        />
      </Admin>
    </div>
  );
};

export default App;
