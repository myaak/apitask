import { NEWS_ITEM_ROUTE, NEWS_ROUTE } from "./utils/routes.ts";
import { RouteObject } from "react-router-dom";
import NewsListScreen from "../../screens/NewsListScreen/NewsListScreen.tsx";
import NewsDetailScreen from "../../screens/NewsDetailScreen/NewsDetailScreen.tsx";

export const AppRoutes: RouteObject[] = [
  {
    path: NEWS_ROUTE,
    element: <NewsListScreen />
  },
  {
    path: NEWS_ITEM_ROUTE,
    element: <NewsDetailScreen />
  }
];
