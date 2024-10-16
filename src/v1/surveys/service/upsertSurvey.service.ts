import Survey from '../model/model';
import { ServiceResponse } from '../../helpers/responseHandler';

const upsertSurvey= async (): Promise<ServiceResponse> => {
    const survey = await Survey.findOne({
        where: { surveyId: 'sdepold' }
      });
      if(!survey){
            return {
                status: 400,
                message: 'Something went wrong.',
                data: [],
                errors: true,
                success: false,
            }
      }
      survey.surveyName = 
}
