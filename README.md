![image](https://user-images.githubusercontent.com/77177020/189109764-e3fe0a3e-53f8-40de-afea-e8ad4e16da9d.png)

## Project to Round-Up transactions for a given week and adding that combined amount into a Savings Goal using the freely avaliable Starling Bank API

This is a  “round-up”   feature   for   Starling   customers   using   their   public
developer   API   that   is   available   to   all   customers   and   partners.

For   a   customer,   take   all   the   transactions   in   a   given   week   and   round   them   up   to   the   nearest  £
pound.   For   example   with   spending   of   £4.35,   £5.20   and   £0.87,   the   round-up   would   be   £1.58.  
This   amount   should   then   be   transferred   into   a  savings   goal - https://www.starlingbank.com/blog/introducing-goals/,   helping   the   customer   save   for
future   adventures.  



## Getting Started

1. [Sign-up](http://developer.starlingbank.com/signup) for a Starling developer account and verify / secure your account.
2. [Create an application](https://developer.starlingbank.com/application/list) 
3. [Create a sandbox customer](https://developer.starlingbank.com/sandbox/select) for your application. This creates a new active customer account in a test bank, and simulates them granting API access to your application. 
4. Copy the access token for the customer. This is effectively a username / password for the customer’s account, specific to your application and the level of access they have chosen to give you. 
5. Click the auto-simulate button for the customer. This makes about 30 transactions on the customer account to give a reasonable history to play with \

Add your access token to the .env.local file\
Run yarn install\
Run yarn dev



### This is just a demo to showcase some of the best practices using nextjs/react/typescript/eslint/redux/rtkquery and writing clean code that can be easily tested and can scale very well.

Other best practices such as API validation, testing etc will be added soon.



That’s it! You can now play around with the application and build on top of it.

