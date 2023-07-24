import axios from "axios";
import { NewsInstance } from "../types/News.ts";
import { NewsItemInstance } from "../types/NewsItem.ts";

//get news via redux asyncThunk
export const getAllNews = async (countToFetch: number, thinkAPI: any) => {
  const pageSize = 30;
  const totalPages = Math.ceil(countToFetch / pageSize);

  const allNews: NewsInstance[] = [];

  let fetchedNews = 0; // counter

  for (let page = 1; page <= totalPages; page++) {
    try {
      const response = await axios.get<NewsInstance[]>(`https://api.hnpwa.com/v0/newest/${page}.json`);
      const newsOnPage = response.data;

      const remainingNewsToAdd = countToFetch - fetchedNews;
      const newsToAdd = Math.min(remainingNewsToAdd, newsOnPage.length);

      allNews.push(...newsOnPage.slice(0, newsToAdd));
      fetchedNews += newsToAdd;
    } catch (error) {
      return thinkAPI.rejectWithValue("Something went wrong");
    }
  }

  return allNews;
};

export const getSingleItem = async (id: number) => {
  try {
    const response = await axios.get<NewsItemInstance>(`https://api.hnpwa.com/v0/item/${id}.json`);
    return response.data;
  } catch (e) {
    return new Error();
  }
};
