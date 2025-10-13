// 03.js

// JS DOM Properties & Methods

// 1. innerText
//    → Sirf visible text deta hai (CSS ka respect karta hai)

// 2. textContent
//    → Pure text deta hai (hidden bhi)
//    → Fast hai, CSS check nahi karta

// 3. innerHTML
//    → HTML code + text deta hai
//    → Set karne par pura HTML replace ho jata hai
//    → XSS attack ka risk hota hai

// 4. style
//    → Inline CSS change/set karne ke liye use hota hai
//    → Sirf inline styles dikhta hai, external nahi

// 5. getAttribute("attr")
//    → Attribute ka value nikalta hai
//    → Example: href, src, id, class

// 6. setAttribute("attr","value")
//    → Attribute set/change karta hai
//    → Agar attribute nahi hai to naya bana deta hai
