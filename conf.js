exports.config = {
    //export let config: Config = {
        //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    getPageTimeout: 80000,
    allScriptsTimeout:  5000000,
    capabilities: {
        browserName: 'chrome',
        // multiCapabilities: [

        //       {'browserName': 'chrome',
          
        //      'chromeOptions': {
          
        //       'args': ['disable-infobars']
          
        //       }
          
        //     },
          
        //        {'browserName': 'firefox',
          
        //      'moz:firefoxOptions': {
          
        //        'args': ['--safe-mode']
          
        //      }
          
             },
          
            //  ],


        //     chromeOptions:{
        //    // useAutomationExtension: false,
        //     args: [ "--headless","--disable-gpu","--window-size=1366x768"],
        //         //args:["--headless"]
        //     },
        
            //'moz:firefoxOptions': {
            //useAutomationExtension: false,
            //args: [ "--headless","--disable-gpu","--window-size=1366x768"],
                //args: [ "--headless" ]
                
            
        //chromeOptions: {
            //useAutomationExtension: false,
            //args: [ "--headless","--disable-gpu","--window-size=1366x768"],

        //}

    
    // onPrepare: async function () {
    //     await browser.waitForAngularEnabled(false);
    //     await browser.manage().window().maximize();
        

    

    framework: 'custom',
   // frameworkPath: './conf.js',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    defaultTimeoutInterval: 90000,
    // Spec patterns are relative to this directory.
    specs: ['./features/Login.feature'],

    
      
    //capabilities: env.capabilities,

    // baseUrl: env.baseUrl,

    cucumberOpts: {

        format: 'json:sample_report.json',
        //output: 'cucumber.html',
        require: ['./JSFiles/stepdefinition.js','./timeOut.js','./JSFiles/Hook.js']
        //format:['json:.test/results.json'],
        //   tags: '@dev',
        //   format: 
        //'../JSFiles/*.
    },

   

    // create html report
    onComplete: () => {
    var reporter = require('cucumber-html-reporter');
         var options = {
           theme: 'bootstrap',
           jsonFile: './sample_report.json',
            output: './results.html',
    //          //screenshotPath: './screenshots',
            reportSuiteAsScenarios: true,
            launchReport: true,
    //          //screenshotsOnlyOnFailure: true,
            metadata: {
                "App Version": "0.3.2",
             "Test Environment": "STAGING",
             "Browser": "Chrome  54.0.2840.98",
                  "Platform": "Windows 10",
                  "Parallel": "Scenarios",
                  "Executed": "Remote"
             },
             output: './report/cucumber_report.html',
        };
     reporter.generate(options);
      },
    };