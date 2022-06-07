import DocChain from '../../images/DocChainImg.png';
import ShareBytesImg from '../../images/ShareBytesImg.png';
import SmartSolver from '../../images/SmartSolverImg.png';
import VIEmail from '../../images/VIEmail-Img.png';
import WeatherPoint from '../../images/WeatherPointImg.png';

export const projectInfo = [
    {
        name: 'DOC-CHAIN',
        description: 'DOC-CHAIN is a Blockchain based platform for verifying documents. Universities can upload documents to the platform. This document is stored on IPFS; IPFS returns a hash that is encrypted and then stored on Hyperledger blockchain. Other universities or companies can upload a document and then it can be verified against the document that is in the blockchain.',
        tech_stack: [{ name: 'ReactJS' }, { name: 'NodeJS' }, {name: 'ExpressJS'}, { name: 'MongoDB' }, { name: 'Hyperledger Fabric' }, { name: 'IPFS' }],
        github: 'https://github.com/OptimalLearner/DOC-CHAIN',
        live: '',
        banner_img: DocChain,
        img_start: 'start'
    },
    {
        name: 'ShareBytes',
        description: 'ShareBytes is a full stack file sharing web application. Users can view all the files they had uploaded previously. They can also upload new files through the application. Once the file is uploaded, it will get a permanent link associated with it, which can be shared by the user with others. Any person whether logged in or not can download the file from the link shared by that user.',
        tech_stack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Bootstrap5' }, { name: 'Flask' }, { name: 'MongoDB' }],
        github: 'https://github.com/OptimalLearner/ShareBytes',
        live: 'https://share-bytes.herokuapp.com/',
        banner_img: ShareBytesImg,
        img_start: ''
    },
    {
        name: 'SmartSolver',
        description: 'SmartSolver is a centralized chatbot system developed in the form of web app where college institutes can register and upload the data regarding their organization. The chatbot system plays a vital role saving the efforts and time of users and increases the efficiency of the organization as no student is left unattended. The chatbot uses NLP to tailor unique responses and interpret the questions asked. The chatbot learns from the dataset entered by the admin and the model is trained using Tensorflow. ',
        tech_stack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'MDBootstrap' }, { name: 'Flask' }, { name: 'MySQL' }, { name: 'Tensorflow' }],
        github: '',
        live: '',
        banner_img: SmartSolver,
        img_start: 'start'
    },
    {
        name: 'VIEmail',
        description: 'VI Email is basically an email system designed for the visually impaired or even a physically challenged person who cannot make use of his hands that can be used to simplify the problems faced by them of communication over the internet through email. This application eliminates the use of keyboard. So only with the help of speech, the person can successfully send/receive text based emails to/from anyone.',
        tech_stack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Flask' }, { name: 'WebSpeech API' }],
        github: 'https://github.com/OptimalLearner/VI-Email',
        live: '',
        banner_img: VIEmail,
        img_start: ''
    },
    {
        name: 'WeatherPoint',
        description: 'WeatherPoint is a web application that provides the weather forecast information. The user needs to select the location and the app displays the current weather data, time of sunrise and sunset and air quality of the selected location along with the hourly weather data up-to 4 hours and daily weather forecast up-to 4 days. A map is integrated to show weather info of the location. User also gets an option to compare time zones of different location.',
        tech_stack: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Bootstrap5' }, { name: 'LeafletJS' }, { name: 'MomentJS' }],
        github: 'https://github.com/OptimalLearner/WeatherPoint',
        live: '',
        banner_img: WeatherPoint,
        img_start: 'start'
    }
]