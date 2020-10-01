import * as AWS from 'aws-sdk' ;

let ssm = new AWS.SSM() ;

ssm.getParameters( {
  Names: [ '/monarch-ro/external-vpc/id', '/monarch-ro/full-domain-name'],
  WithDecryption: true ,
}).promise().then( data => {
  console.log( data ) ;
})
