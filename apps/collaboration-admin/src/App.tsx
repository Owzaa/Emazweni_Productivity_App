import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ChatList } from "./chat/ChatList";
import { ChatCreate } from "./chat/ChatCreate";
import { ChatEdit } from "./chat/ChatEdit";
import { ChatShow } from "./chat/ChatShow";
import { CollaborationDocsList } from "./collaborationDocs/CollaborationDocsList";
import { CollaborationDocsCreate } from "./collaborationDocs/CollaborationDocsCreate";
import { CollaborationDocsEdit } from "./collaborationDocs/CollaborationDocsEdit";
import { CollaborationDocsShow } from "./collaborationDocs/CollaborationDocsShow";
import { InboxList } from "./inbox/InboxList";
import { InboxCreate } from "./inbox/InboxCreate";
import { InboxEdit } from "./inbox/InboxEdit";
import { InboxShow } from "./inbox/InboxShow";
import { WhiteboardsList } from "./whiteboards/WhiteboardsList";
import { WhiteboardsCreate } from "./whiteboards/WhiteboardsCreate";
import { WhiteboardsEdit } from "./whiteboards/WhiteboardsEdit";
import { WhiteboardsShow } from "./whiteboards/WhiteboardsShow";
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
        title={"Collaboration"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Chat"
          list={ChatList}
          edit={ChatEdit}
          create={ChatCreate}
          show={ChatShow}
        />
        <Resource
          name="CollaborationDocs"
          list={CollaborationDocsList}
          edit={CollaborationDocsEdit}
          create={CollaborationDocsCreate}
          show={CollaborationDocsShow}
        />
        <Resource
          name="Inbox"
          list={InboxList}
          edit={InboxEdit}
          create={InboxCreate}
          show={InboxShow}
        />
        <Resource
          name="Whiteboards"
          list={WhiteboardsList}
          edit={WhiteboardsEdit}
          create={WhiteboardsCreate}
          show={WhiteboardsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
