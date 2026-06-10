const ArrayMethods = () => {
  return (
    <div>
      <div className="conatiner flex justify-around py-9 m-auto flex-wrap gap-5">
        <div className="box">
          <div className="heading bg-white  text-black my-3  rounded-xl">
            <h1 className="text-2xl">Push()</h1>
            <br />
            <div className="content border text-l border-gray-300 p-4  rounded">
              <p>
                <span className="font-bold">Definition:</span> <br /> Adds one
                or more elements to the end of an array.
              </p>
              <h2 className="font-bold">Syntax: </h2>
              <p>array.push(element1, element2, ...)</p>
              <h2 className="font-bold">Return Type: </h2>
              <p> Number (new array length)</p>
            </div>
          </div>
          <div className="code  rounded p-6  bg-black text-white">
            <p>
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">fruits</span> = [{" "}
              <span className="text-purple-500">"Apple", "Banana"</span> ];{" "}
              <br />
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">result</span> ={" "}
              <span className="text-red-500">fruits</span>.push({" "}
              <span className="text-purple-500">"Orange"</span> ); <br />
              console.log(<span className="text-red-500">fruits</span>); // [{" "}
              <span className="text-purple-500">
                "Apple", "Banana","Orange"
              </span>{" "}
              ] <br />
              console.log(<span className="text-red-500">result</span> ); // 3
            </p>
          </div>
        </div>
        <div className="box">
          <div className="heading bg-white  text-black my-3  rounded-xl">
            <h1 className="text-2xl">pop()</h1>
            <br />
            <div className="content border text-l border-gray-300 p-4  rounded">
              <p>
                <span className="font-bold">Definition:</span> <br />
                Removes the last element from an array.
              </p>
              <h2 className="font-bold">Syntax: </h2>
              <p>array.pop()</p>
              <h2 className="font-bold">Return Type: </h2>
              <p> Removed element</p>
            </div>
          </div>
          <div className="code  rounded p-6  bg-black text-white">
            <p>
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">fruits</span> = [{" "}
              <span className="text-purple-500">
                "Apple", "Banana","orange"
              </span>{" "}
              ]; <br />
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">result</span> ={" "}
              <span className="text-red-500">fruits</span>.pop() <br />
              console.log(<span className="text-red-500">fruits</span>); // [{" "}
              <span className="text-purple-500">"Apple", "Banana"</span> ]{" "}
              <br />
              console.log(<span className="text-red-500">result</span> ); //
              orange
            </p>
          </div>
        </div>
        <div className="box">
          <div className="heading bg-white  text-black my-3  rounded-xl">
            <h1 className="text-2xl">unshift()</h1>
            <br />
            <div className="content border text-l border-gray-300 p-4  rounded">
              <p>
                <span className="font-bold">Definition:</span> <br /> Adds one
                or more elements to the end of an array.
              </p>
              <h2 className="font-bold">Syntax: </h2>
              <p>array.unshift(element1, element2, ...)</p>
              <h2 className="font-bold">Return Type: </h2>
              <p> Number (new array length)</p>
            </div>
          </div>
          <div className="code  rounded p-6  bg-black text-white">
            <p>
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">fruits</span> = [{" "}
              <span className="text-purple-500">"Apple", "Banana"</span> ];{" "}
              <br />
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">result</span> ={" "}
              <span className="text-red-500">fruits</span>.unshift({" "}
              <span className="text-purple-500">"Orange"</span> ); <br />
              console.log(<span className="text-red-500">fruits</span>); // [{" "}
              <span className="text-purple-500">
                "Apple", "Banana","Orange"
              </span>{" "}
              ] <br />
              console.log(<span className="text-red-500">result</span> ); // 3
            </p>
          </div>
        </div>
        <div className="box">
          <div className="heading bg-white  text-black my-3  rounded-xl">
            <h1 className="text-2xl">shift()</h1>
            <br />
            <div className="content border text-l border-gray-300 p-4  rounded">
              <p>
                <span className="font-bold">Definition:</span> <br />
                Removes the last element from an array.
              </p>
              <h2 className="font-bold">Syntax: </h2>
              <p>array.shift()</p>
              <h2 className="font-bold">Return Type: </h2>
              <p> Removed element</p>
            </div>
          </div>
          <div className="code  rounded p-6  bg-black text-white">
            <p>
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">fruits</span> = [{" "}
              <span className="text-purple-500">
                "Apple", "Banana","orange"
              </span>{" "}
              ]; <br />
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">result</span> ={" "}
              <span className="text-red-500">fruits</span>.pop() <br />
              console.log(<span className="text-red-500">fruits</span>); // [{" "}
              <span className="text-purple-500">"Apple", "Banana"</span> ]{" "}
              <br />
              console.log(<span className="text-red-500">result</span> ); //
              orange
            </p>
          </div>
        </div>
        <div className="box">
          <div className="heading bg-white  text-black my-3  rounded-xl">
            <h1 className="text-2xl">forEach()</h1>
            <br />
            <div className="content border text-l border-gray-300 p-4  rounded">
              <p>
                <span className="font-bold">Definition:</span> <br />
                Executes a function once for each array element.
              </p>
              <h2 className="font-bold">Syntax: </h2>
              <p>array.forEach((value, index) = &gt; {})</p>
              <h2 className="font-bold">Return Type: </h2>
              <p>undefined</p>
            </div>
          </div>
          <div className="code  rounded p-6  bg-black text-white">
            <p>
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">num</span> = [{" "}
              <span className="text-purple-500">1,2,3,4</span> ]; <br />
              <span className="text-green-500">nums</span>
              <span className="text-red-500">.forEach</span> = (
              <span className="text-purple-500">
                num =&gt; console.log(num)
              </span>
              )
            </p>
          </div>
        </div>
        <div className="box">
          <div className="heading bg-white  text-black my-3  rounded-xl">
            <h1 className="text-2xl">map()</h1>
            <br />
            <div className="content border text-l border-gray-300 p-4  rounded">
              <p>
                <span className="font-bold">Definition:</span> <br />
                Creates a new array by transforming each element.
              </p>
              <h2 className="font-bold">Syntax: </h2>
              <p>array.map((value, index) = &gt; {})</p>
              <h2 className="font-bold">Return Type: </h2>
              <p>Array</p>
            </div>
          </div>
          <div className="code  rounded p-6  bg-black text-white">
            <p>
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">num</span> = [{" "}
              <span className="text-purple-500">1,2,3,4</span> ]; <br />
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">doubled</span> ={" "}
              <span className="text-green-500">nums</span>
              <span className="text-red-500">.map</span> = (
              <span className="text-purple-500">num =&gt; num*2</span>)
              <br />
              console.log(<span className="text-purple-500"> doubled</span> ) //
              2,4,6,8
            </p>
          </div>
        </div>
        <div className="box">
          <div className="heading bg-white  text-black my-3  rounded-xl">
            <h1 className="text-2xl">filter()</h1>
            <br />
            <div className="content border text-l border-gray-300 p-4  rounded">
              <p>
                <span className="font-bold">Definition:</span> <br />
                Creates a new array containing elements that satisfy a condition.
              </p>
              <h2 className="font-bold">Syntax: </h2>
              <p>array.filter((value, index) = &gt; {})</p>
              <h2 className="font-bold">Return Type: </h2>
              <p>Array</p>
            </div>
          </div>
          <div className="code  rounded p-6  bg-black text-white">
            <p>
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">num</span> = [{" "}
              <span className="text-purple-500">1,2,3,4</span> ]; <br />
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">even</span> ={" "}
              <span className="text-green-500">nums</span>
              <span className="text-red-500">.filter</span> = (
              <span className="text-purple-500">num =&gt; num%2 == 0</span>)
              <br />
              console.log(<span className="text-purple-500"> even</span> ) //
              2,4
            </p>
          </div>
        </div>
        <div className="box">
          <div className="heading bg-white  text-black my-3  rounded-xl">
            <h1 className="text-2xl">find()</h1>
            <br />
            <div className="content border text-l border-gray-300 p-4  rounded">
              <p>
                <span className="font-bold">Definition:</span> <br />
              Returns the first element that satisfies a condition.
              </p>
              <h2 className="font-bold">Syntax: </h2>
              <p>array.find((value, index) = &gt; {})</p>
              <h2 className="font-bold">Return Type: </h2>
              <p>Array</p>
            </div>
          </div>
          <div className="code  rounded p-6  bg-black text-white">
            <p>
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">num</span> = [{" "}
              <span className="text-purple-500">13,32,23,45,50,14</span> ]; <br />
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">max</span> ={" "}
              <span className="text-green-500">nums</span>
              <span className="text-red-500">.find</span> = (
              <span className="text-purple-500">num =&gt; num &gt; 30</span>)
              <br />
              console.log(<span className="text-purple-500"> max</span> ) //
              32
            </p>
          </div>
        </div>
        <div className="box">
          <div className="heading bg-white  text-black my-3  rounded-xl">
            <h1 className="text-2xl">some()</h1>
            <br />
            <div className="content border text-l border-gray-300 p-4  rounded">
              <p>
                <span className="font-bold">Definition:</span> <br />
             Checks if at least one element satisfies a condition.
              </p>
              <h2 className="font-bold">Syntax: </h2>
              <p>array.some((value) = &gt; {})</p>
              <h2 className="font-bold">Return Type: </h2>
              <p>Boolean</p>
            </div>
          </div>
          <div className="code  rounded p-6  bg-black text-white">
            <p>
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">num</span> = [{" "}
              <span className="text-purple-500">13,32,23,45,50,14</span> ]; <br />
              <span className="text-green-500">let</span>{" "}
              <span className="text-red-500">max</span> ={" "}
              <span className="text-green-500">nums</span>
              <span className="text-red-500">.some</span> = (
              <span className="text-purple-500">num =&gt; num &gt; 5</span>)
              <br />
              console.log(<span className="text-purple-500"> max</span> ) //
              true
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArrayMethods;
