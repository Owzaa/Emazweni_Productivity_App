import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DocsList } from "./docs/DocsList";
import { DocsCreate } from "./docs/DocsCreate";
import { DocsEdit } from "./docs/DocsEdit";
import { DocsShow } from "./docs/DocsShow";
import { WikisList } from "./wikis/WikisList";
import { WikisCreate } from "./wikis/WikisCreate";
import { WikisEdit } from "./wikis/WikisEdit";
import { WikisShow } from "./wikis/WikisShow";
import { UniversalSearchList } from "./universalSearch/UniversalSearchList";
import { UniversalSearchCreate } from "./universalSearch/UniversalSearchCreate";
import { UniversalSearchEdit } from "./universalSearch/UniversalSearchEdit";
import { UniversalSearchShow } from "./universalSearch/UniversalSearchShow";
import { AskAiList } from "./askAi/AskAiList";
import { AskAiCreate } from "./askAi/AskAiCreate";
import { AskAiEdit } from "./askAi/AskAiEdit";
import { AskAiShow } from "./askAi/AskAiShow";
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
        title={"Knowledge Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Docs"
          list={DocsList}
          edit={DocsEdit}
          create={DocsCreate}
          show={DocsShow}
        />
        <Resource
          name="Wikis"
          list={WikisList}
          edit={WikisEdit}
          create={WikisCreate}
          show={WikisShow}
        />
        <Resource
          name="UniversalSearch"
          list={UniversalSearchList}
          edit={UniversalSearchEdit}
          create={UniversalSearchCreate}
          show={UniversalSearchShow}
        />
        <Resource
          name="AskAi"
          list={AskAiList}
          edit={AskAiEdit}
          create={AskAiCreate}
          show={AskAiShow}
        />
      </Admin>
    </div>
  );
};

export default App;
