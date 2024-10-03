const core = require('@actions/core');
const fs = require('fs');

// possivelmente teremos que fazer uma normalização nos dados resultantes da query
const queryJson = [
  {
    "name": "configuration",
    "schema_name": "public",
    "description": "",
    "database_name": "slackalm",
    "columns": [
      {
        "name": "config",
        "type": "json",
        "description": "",
        "is_primary_key": false,
        "is_unique": false,
        "is_nullable": false
      },
      {
        "name": "channelid",
        "type": "character varying",
        "description": "",
        "is_primary_key": true,
        "is_unique": false,
        "is_nullable": false
      }
    ]
  },
  {
    "name": "issues",
    "schema_name": "public",
    "description": "tabela issue",
    "database_name": "slackalm",
    "columns": [
      {
        "name": "channel",
        "type": "character varying",
        "description": "",
        "is_primary_key": true,
        "is_unique": false,
        "is_nullable": false
      },
      {
        "name": "threadid",
        "type": "character varying",
        "description": "",
        "is_primary_key": true,
        "is_unique": false,
        "is_nullable": false
      },
      {
        "name": "issueid",
        "type": "character varying",
        "description": "",
        "is_primary_key": false,
        "is_unique": false,
        "is_nullable": true
      },
      {
        "name": "owners",
        "type": "ARRAY",
        "description": "",
        "is_primary_key": false,
        "is_unique": false,
        "is_nullable": false
      },
      {
        "name": "nextchecktime",
        "type": "timestamp with time zone",
        "description": "",
        "is_primary_key": false,
        "is_unique": false,
        "is_nullable": true
      },
      {
        "name": "sleeping_thread_count",
        "type": "integer",
        "description": "",
        "is_primary_key": false,
        "is_unique": false,
        "is_nullable": false
      },
      {
        "name": "eventtime",
        "type": "timestamp with time zone",
        "description": "",
        "is_primary_key": false,
        "is_unique": false,
        "is_nullable": false
      },
      {
        "name": "active",
        "type": "boolean",
        "description": "",
        "is_primary_key": false,
        "is_unique": false,
        "is_nullable": false
      }
    ]
  }
];

function fetchDatabaseData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(queryJson);
    }, 1000);
  });
}

function createJsonFile(queryResult) {
  const timestamp = new Date().toISOString();
  const fileName = `${timestamp}.json`;
  
  fs.writeFileSync(fileName, JSON.stringify(queryResult, null, 2));
  console.log('JSON file created successfully');
  return fileName;
}

function uploadToS3(fileName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function main() {
  try {
    console.log('Starting action...');
    
    const queryResult = await fetchDatabaseData();
    const fileName = createJsonFile(queryResult);

    await uploadToS3(fileName);

    console.log('Action completed successfully');
  } catch (error) {
    console.error(`Action failed with error: ${error.message}`);
  }
}

main();
