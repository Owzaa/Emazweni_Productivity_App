import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PortfoliosList } from "./portfolios/PortfoliosList";
import { PortfoliosCreate } from "./portfolios/PortfoliosCreate";
import { PortfoliosEdit } from "./portfolios/PortfoliosEdit";
import { PortfoliosShow } from "./portfolios/PortfoliosShow";
import { GanttChartsList } from "./ganttCharts/GanttChartsList";
import { GanttChartsCreate } from "./ganttCharts/GanttChartsCreate";
import { GanttChartsEdit } from "./ganttCharts/GanttChartsEdit";
import { GanttChartsShow } from "./ganttCharts/GanttChartsShow";
import { TasksList } from "./tasks/TasksList";
import { TasksCreate } from "./tasks/TasksCreate";
import { TasksEdit } from "./tasks/TasksEdit";
import { TasksShow } from "./tasks/TasksShow";
import { BoardViewsList } from "./boardViews/BoardViewsList";
import { BoardViewsCreate } from "./boardViews/BoardViewsCreate";
import { BoardViewsEdit } from "./boardViews/BoardViewsEdit";
import { BoardViewsShow } from "./boardViews/BoardViewsShow";
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
        title={"Project Management"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Portfolios"
          list={PortfoliosList}
          edit={PortfoliosEdit}
          create={PortfoliosCreate}
          show={PortfoliosShow}
        />
        <Resource
          name="GanttCharts"
          list={GanttChartsList}
          edit={GanttChartsEdit}
          create={GanttChartsCreate}
          show={GanttChartsShow}
        />
        <Resource
          name="Tasks"
          list={TasksList}
          edit={TasksEdit}
          create={TasksCreate}
          show={TasksShow}
        />
        <Resource
          name="BoardViews"
          list={BoardViewsList}
          edit={BoardViewsEdit}
          create={BoardViewsCreate}
          show={BoardViewsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
