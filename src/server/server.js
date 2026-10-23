// const express = require("express");
// const cors = require("cors");
import process from "node:process";
import express from "express";
import cors from "cors";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get("/", (req, res) => {
  res.json({
    message: "AI Interview Backend is running!"
  });
});

app.post("/api/generate-question", async (req, res) => {

  try {

    const {
      role,
      experience,
      topic,
      difficulty
    } = req.body;

    const response = await client.responses.create({

      model: "gpt-6-luna",

      input: `
You are an expert technical interviewer.

Generate ONE interview question for the candidate.

Role: ${role}
Experience: ${experience}
Topic: ${topic}
Difficulty: ${difficulty}

Only return the interview question.
Do not give the answer.
      `
    });

    res.json({
      success: true,
      question: response.output_text
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "AI question generate nahi ho paya"
    });

  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


