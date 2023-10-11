module.exports=(app)=>{
    const index=require('../controllers/index.server.controller');
    app.get('/',index.render)
    app.get('/about',index.renderAbout)
    app.get('/services',index.renderService)
    app.get('/projects',index.renderProject)
    app.get('/contact-me',index.renderContact)
    
}