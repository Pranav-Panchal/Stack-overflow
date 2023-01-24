import mongoose from 'mongoose'
import Questions from '../models/Questions.js';


export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body; //askquestion ma thi je title body e avse e postquestiondata ma store krsu
    const postQuestion = new Questions(postQuestionData);  // questiondata ni velue user id sathe pass krsu postQuestion ma (new object banayu che Question)
    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully")
    } catch (error) {
        console.log(error)
        res.status(409).json("Couldn't post a new question")
        
    }

}

export const getAllQuestions = async (req, res) => {
    try {
        const questionList = await Questions.find();
        res.status(200).json(questionList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const deleteQuestion = async (req, res) => {
    const {id: _id} = req.params; // id jase

    if(!mongoose.Types.ObjectId.isValid(_id)){                //e id ne mongoos ma jose k ej id che
        return res.status(404).send('question unavailable...')
    }

    try {
       await Questions.findByIdAndRemove( _id )  
       res.status(200).json({message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({message: error.message})    
    }
}

export const voteQuestion = async (req, res) => {
    const { id: _id} = req.params;
    const {value, userId} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){                
        return res.status(404).send('question unavailable...')
    }

    try{
        const question = await Questions.findById(_id)
        const upIndex = question.upVote.findIndex((id) => id === String(userId))
        const downIndex = question.downVote.findIndex((id) => id === String(userId))

        if(value === 'upVote'){
            if(downIndex !== -1){     // jo user e already downvote keiyu hase to e userid ne nikadi devama avse downvote arry mathi
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
            if(upIndex === -1){      
                question.upVote.push(userId)
            }else{
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
        }

        else if(value === 'downVote'){
            if(upIndex !== -1){     // jo user e already upvote keiyu hase to e userid ne nikadi devama avse upvote arry mathi
                question.upVote = question.upVote.filter((id) => id !== String(userId))
            }
            if(downIndex === -1){      
                question.downVote.push(userId)
            }else{
                question.downVote = question.downVote.filter((id) => id !== String(userId))
            }
        }
        await Questions.findByIdAndUpdate( _id, question)
        res.status(200).json({message: "voted successfully..."})
    } catch (error) {
        res.status(404).json({message: "id not found"})    
    }
}


// a part contoller che je chelle ave pela half code model ma jase jema data creat krvano database mate table vadu
//pachi routes ma jai ne pela link banavani /Ask kri ne ema AskQuestion name nu functon ch je controller ma che e post request thi apde 
// link ni req moklisu


//req.body thi title body e badho data postquestiondata ma nahiyo
// jevo recve thayo apde e data and id banne ne new object banayo che ema pass kriyo
//mpnogdb ma save kriyo

