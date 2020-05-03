import fn from './functions.js';

async function runCode() {
    let r;
    let sampleJsonA = 'https://support.oneskyapp.com/hc/en-us/article_attachments/202761627/example_1.json',
        sampleJsonB = 'https://support.oneskyapp.com/hc/en-us/article_attachments/202761727/example_2.json';
    console.log(`go go`);

    let ct = new fn.ChangeTracker();

    r = await fn.getSampleJson(sampleJsonA);
    console.log(r);
    r = await fn.getSampleJson(sampleJsonB);
    console.log(r);
    // fetch(sampleJsonB)
    //     .then(response => response.json())
    //     .then(data => console.log(data));


    console.log(fn.passObj());
    console.log(ct.object);

    console.log(await ct.init(sampleJsonA));

    console.log(ct.object);
    console.log(ct.updateObj({x:123}));
    console.log(ct.object);

    console.log(ct.fields);
    console.log(ct.trackedFields);

    ct.setFields(['Title', 'Modified']);
    ct.setTrackedFields(['Title']);

    console.log(ct.fields);
    console.log(ct.trackedFields);

    ct.fields = ['Author'];
    console.log(ct.fields);
}
// window.runCode = runCode;
document.querySelector('button').addEventListener('click', runCode);