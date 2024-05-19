import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GoalsList } from "./goals/GoalsList";
import { GoalsCreate } from "./goals/GoalsCreate";
import { GoalsEdit } from "./goals/GoalsEdit";
import { GoalsShow } from "./goals/GoalsShow";
import { WorkloadViewsList } from "./workloadViews/WorkloadViewsList";
import { WorkloadViewsCreate } from "./workloadViews/WorkloadViewsCreate";
import { WorkloadViewsEdit } from "./workloadViews/WorkloadViewsEdit";
import { WorkloadViewsShow } from "./workloadViews/WorkloadViewsShow";
import { TimeTrackingList } from "./timeTracking/TimeTrackingList";
import { TimeTrackingCreate } from "./timeTracking/TimeTrackingCreate";
import { TimeTrackingEdit } from "./timeTracking/TimeTrackingEdit";
import { TimeTrackingShow } from "./timeTracking/TimeTrackingShow";
import { DashboardsList } from "./dashboards/DashboardsList";
import { DashboardsCreate } from "./dashboards/DashboardsCreate";
import { DashboardsEdit } from "./dashboards/DashboardsEdit";
import { DashboardsShow } from "./dashboards/DashboardsShow";
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
        title={"Resource Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Goals"
          list={GoalsList}
          edit={GoalsEdit}
          create={GoalsCreate}
          show={GoalsShow}
        />
        <Resource
          name="WorkloadViews"
          list={WorkloadViewsList}
          edit={WorkloadViewsEdit}
          create={WorkloadViewsCreate}
          show={WorkloadViewsShow}
        />
        <Resource
          name="TimeTracking"
          list={TimeTrackingList}
          edit={TimeTrackingEdit}
          create={TimeTrackingCreate}
          show={TimeTrackingShow}
        />
        <Resource
          name="Dashboards"
          list={DashboardsList}
          edit={DashboardsEdit}
          create={DashboardsCreate}
          show={DashboardsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
