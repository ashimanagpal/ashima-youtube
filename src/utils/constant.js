const GOOGLE_API_KEY = "AIzaSyCf9RKrP_fDvzWuFIV9JmzDHvxzjSmQ7BM";

export const LIVE_CHAT_COUNT = 5;

export const YOUTUBE_POPULAR_VIDEO_API = `https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";