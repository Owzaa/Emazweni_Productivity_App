import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ApiIntegrationList } from "./apiIntegration/ApiIntegrationList";
import { ApiIntegrationCreate } from "./apiIntegration/ApiIntegrationCreate";
import { ApiIntegrationEdit } from "./apiIntegration/ApiIntegrationEdit";
import { ApiIntegrationShow } from "./apiIntegration/ApiIntegrationShow";
import { WebhookList } from "./webhook/WebhookList";
import { WebhookCreate } from "./webhook/WebhookCreate";
import { WebhookEdit } from "./webhook/WebhookEdit";
import { WebhookShow } from "./webhook/WebhookShow";
import { OAuthProviderList } from "./oAuthProvider/OAuthProviderList";
import { OAuthProviderCreate } from "./oAuthProvider/OAuthProviderCreate";
import { OAuthProviderEdit } from "./oAuthProvider/OAuthProviderEdit";
import { OAuthProviderShow } from "./oAuthProvider/OAuthProviderShow";
import { IntegrationSettingsList } from "./integrationSettings/IntegrationSettingsList";
import { IntegrationSettingsCreate } from "./integrationSettings/IntegrationSettingsCreate";
import { IntegrationSettingsEdit } from "./integrationSettings/IntegrationSettingsEdit";
import { IntegrationSettingsShow } from "./integrationSettings/IntegrationSettingsShow";
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
        title={"Integrations"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ApiIntegration"
          list={ApiIntegrationList}
          edit={ApiIntegrationEdit}
          create={ApiIntegrationCreate}
          show={ApiIntegrationShow}
        />
        <Resource
          name="Webhook"
          list={WebhookList}
          edit={WebhookEdit}
          create={WebhookCreate}
          show={WebhookShow}
        />
        <Resource
          name="OAuthProvider"
          list={OAuthProviderList}
          edit={OAuthProviderEdit}
          create={OAuthProviderCreate}
          show={OAuthProviderShow}
        />
        <Resource
          name="IntegrationSettings"
          list={IntegrationSettingsList}
          edit={IntegrationSettingsEdit}
          create={IntegrationSettingsCreate}
          show={IntegrationSettingsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
