import {getRequest} from './request';

export const getEvents = async () => {
  const data = await getRequest(
    `https://opensheet.vercel.app/1C-ScdaLPRjKcnNqfxiuHIknYrSKRhd1NePLtV00wX5g/Sheet1`,
  );
  return data;
};
