import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SprintsList } from "./sprints/SprintsList";
import { SprintsCreate } from "./sprints/SprintsCreate";
import { SprintsEdit } from "./sprints/SprintsEdit";
import { SprintsShow } from "./sprints/SprintsShow";
import { SprintReportsList } from "./sprintReports/SprintReportsList";
import { SprintReportsCreate } from "./sprintReports/SprintReportsCreate";
import { SprintReportsEdit } from "./sprintReports/SprintReportsEdit";
import { SprintReportsShow } from "./sprintReports/SprintReportsShow";
import { KanbanList } from "./kanban/KanbanList";
import { KanbanCreate } from "./kanban/KanbanCreate";
import { KanbanEdit } from "./kanban/KanbanEdit";
import { KanbanShow } from "./kanban/KanbanShow";
import { RoadmapBacklogList } from "./roadmapBacklog/RoadmapBacklogList";
import { RoadmapBacklogCreate } from "./roadmapBacklog/RoadmapBacklogCreate";
import { RoadmapBacklogEdit } from "./roadmapBacklog/RoadmapBacklogEdit";
import { RoadmapBacklogShow } from "./roadmapBacklog/RoadmapBacklogShow";
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
        title={"Product Development"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Sprints"
          list={SprintsList}
          edit={SprintsEdit}
          create={SprintsCreate}
          show={SprintsShow}
        />
        <Resource
          name="SprintReports"
          list={SprintReportsList}
          edit={SprintReportsEdit}
          create={SprintReportsCreate}
          show={SprintReportsShow}
        />
        <Resource
          name="Kanban"
          list={KanbanList}
          edit={KanbanEdit}
          create={KanbanCreate}
          show={KanbanShow}
        />
        <Resource
          name="RoadmapBacklog"
          list={RoadmapBacklogList}
          edit={RoadmapBacklogEdit}
          create={RoadmapBacklogCreate}
          show={RoadmapBacklogShow}
        />
      </Admin>
    </div>
  );
};

export default App;
