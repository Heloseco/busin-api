const model = require('./../models/index')

exports.AddBus = async (req, res, next) => {
    const{BusName,BusInfo,SeatId} = req.body;
    try {
        let Bus = await model.Bus.create({
            BusName : BusName,
            BusInfo : BusInfo,
            SeatSetId :SeatId
        })
        res.status(200).json(Bus);
    } catch (error) {
        next(error)
    }
}

exports.EditBus = async (req, res, next) => {
    const {BusName,BusInfo,SeatId} = req.body;
    try {
        let Bus = await model.Bus.update({
            BusName : BusName,
            BusInfo : BusInfo,
            SeatSetId :SeatId
        },
    { where:{id:d}})
        res.status(200).json(Bus);
    } catch (error) {
        next(error)
    }
}

exports.SetSeat = async (req, res, next) => {
    const{SeatAmount} = req.body;
    let total=[];
    for(let i=1; i<=SeatAmount; i ++){
        total.push(i);
    }
    console.log(total);
    try {
        let Seat = await model.Seat.create ({
            SeatAmount : SeatAmount,
            SeatTotal : `${total}`,
            Availble: SeatAmount ,
            Booked: "",
        })
    }catch (error) {
        next(error)
    }
}

exports.getSeat = async (req, res, next) => {
    const id = req.params.id;
    try {
        let Seats = await model.Seat.findOne(
            {
                where:{
                    id:id
                }
            }
        );
        if(Seats.Booked != ""){
            let Available = Seats.SeatTotal.split(",") - Seats.Booked.split(",");
        }else {
            Available = Seats.SeatTotal;
        }

        res.status(200).json({Availble:Available})
    }catch (error) {
        next(error);
    }
}

exports.BookSeat = async function (req, res, next){
    const id = req.params.id;
    const {Booked} = req.body;
    

}