import SurveyOption from "../../question/model/option.model"

const upsertSurveyQuestion = async () =>{
    const [surveyOption, created] = await SurveyOption.findOrCreate({where: {},
        defaults:{

        },})
}