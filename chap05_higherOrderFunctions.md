* functions create new function
```javascript
   function greaterThan (n) {
       return m => m > n;
   }

   let greaterThan10 = greaterThan(10);
   console.log(greaterThan10(11));
   // -> true
```

* function change other functions
```javascript
   function noisy(f) {
       return (...args) => {
           console.log("calling with", args);
           let result = f(...args);
           console.log("calling with", args, ", returned", result);
           return result;
       };
   }
```

* function provide new types of control flow
```javascript
   function repeat(n, action) {
       for (let i = 0; i < n; i++) {
           action(i);
       }
   }
   
   function unless(test, then) {
       if (!test) then();
   }

   repeat(3, n => {
       unless(n % 2 == 1, () => {
           console.log(n, "is even");
       });
   })
```

* built-in array method: forEach - that provides something like a for/of loop as a higher-order function
```javascript
["A", "B"].forEach(l => console.log(l));

for(element in ["A", "B"]) {
    console.log(element);
}
```

* filtering arrays
```javascript
    function filter(array, test) {
        let passed = [];
        for (let element of array) {
            if (test(element)) {
                passed.push(element);
            }
        }
        return passed;
    }
```
* like forEach, filter is a standard array method
```javascript
    filter(array, element => element.condition);
```

* transforming with map
```javascript
    function map(array, transform) {
        let mapped = [];
        for (let element of array) {
            mapped.push(transform(element));
        }
        return mapped;
    }

    let rtlScripts = array.filter(element => element.direction == "rtl");
    console.log(map(rtlScripts, element => element.name));
```
* like forEach and filter, map is a standard array method.

* summarizing with reduce
```javascript
    function reduce(array, combine, start) {
      let current = start;
      for (let element of array) {
        current = combine(current, start);
      }
      return current;
    }
```

* Compose operations
```javascript
    function average(array) {
      return array.reduce((a, b) => a + b) / array.length;
    }

    let livingTrue = Math.round(average(array.filter(element => element.living).map(element => element.year)));
    let livingFalse = Math.round(average(array.filter(element => !element.living).map(element => element.year)));
```
* or write this computation as one big loop
```javascript
    let total = 0, count = 0;
    for (let element of array) {
      if (element.living) {
        total += element.year;
        count += 1;
      }
    }
    let result = Math.round(total / count);
```

* The first solution build up new arrays when running **filter**, **map**, when the second only computes some numbers, doing less work, no array is born

* function show which scripts are used in a piece of text
```javascript
  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  console.log(countBy([1,2,3,4,5], n => n > 2));
  // -> [{name: false, count: 2}, {name: true, count: 3}]

  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  console.log(characterScript(121));
  // -> {name: "Latin", ...}

  function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
  }
```