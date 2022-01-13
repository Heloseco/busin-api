const model = require('./../models/index');

exports.AddSchedule = async (req, res, next) => {
    const{tour,day,month,year,travel,back,BId}= req.body;

    try{
        const schedules= await model.Schedule.create({
            TourName:tour,
            Day:day,
            Month:month,
            Year:year,
            Travel_to:travel,
            BackAt:back,
            BusId:BId
        })
        res.status(200).json({schedules:schedules, done:true})
    }catch(error){
        nect(error);
    }
}