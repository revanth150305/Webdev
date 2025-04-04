import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-lite",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
};

async function run(prompt) {
  try {
      const chatSession = model.startChat({
          generationConfig,
          history: [],
      });

      const result = await chatSession.sendMessage(prompt);
      const responseText = result.response.text();
      console.log("Response Text:", responseText);
      return responseText;
  } catch (error) {
      console.error("Gemini API Error:", error); 
      return null;
  }
}

export default run;