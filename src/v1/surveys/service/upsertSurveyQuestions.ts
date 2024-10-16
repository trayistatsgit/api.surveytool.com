import React from 'react'
import SurveyQuestion from '../../question/model/question.model'

const upsertSurveyQuestions = async () => {
  const [questions, created] = await SurveyQuestion.findOrCreate({where :{}})
}

export default upsertSurveyQuestions