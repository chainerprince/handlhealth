<a name="CombineJsonFiles"></a>
# The codes to combine json files and initialize the value of the output to the sum of the the input jsons.

# How to run
## install dependencies
- yarn
## Run the project

- yarn start

## Run tests

- yarn run test


- NB. The output is in /data/output.json


## How it works.
This class is used to combine json files

**Kind**: global class

* [CombineJsonFiles](#CombineJsonFiles)
    * [new CombineJsonFiles(outputFile)](#new_CombineJsonFiles_new)
    * [.this.readFiles()](#CombineJsonFiles.this.readFiles) ⇒ <code>string</code>
    * [.this.calculateSum()](#CombineJsonFiles.this.calculateSum) ⇒ <code>string</code>
    * [.this.jsonToString()](#CombineJsonFiles.this.jsonToString) ⇒ <code>string</code>
    * [.this.writeOutputFile()](#CombineJsonFiles.this.writeOutputFile) ⇒ <code>boolean</code>

<a name="new_CombineJsonFiles_new"></a>

### new CombineJsonFiles(outputFile)
CombineJsonFiles class


| Param | Type | Description |
| --- | --- | --- |
| outputFile | <code>string</code> | The output file path |

<a name="CombineJsonFiles.this.readFiles"></a>

### CombineJsonFiles.this.readFiles() ⇒ <code>string</code>
**Kind**: static method of [<code>CombineJsonFiles</code>](#CombineJsonFiles)
**Returns**: <code>string</code> - - The content of json files
**Throws**:

- <code>Error</code> - If the file is not found

<a name="CombineJsonFiles.this.calculateSum"></a>

### CombineJsonFiles.this.calculateSum() ⇒ <code>string</code>
**Kind**: static method of [<code>CombineJsonFiles</code>](#CombineJsonFiles)
**Returns**: <code>string</code> - - The sum of the arguments

| Param | Description |
| --- | --- |
| ...args | array of strings |

<a name="CombineJsonFiles.this.jsonToString"></a>

### CombineJsonFiles.this.jsonToString() ⇒ <code>string</code>
**Kind**: static method of [<code>CombineJsonFiles</code>](#CombineJsonFiles)
**Returns**: <code>string</code> - - The content of json files
<a name="CombineJsonFiles.this.writeOutputFile"></a>

### CombineJsonFiles.this.writeOutputFile() ⇒ <code>boolean</code>
**Kind**: static method of [<code>CombineJsonFiles</code>](#CombineJsonFiles)
**Returns**: <code>boolean</code> - - True if the file is written successfully
**Throws**:

- <code>Error</code> - If the file is not found

