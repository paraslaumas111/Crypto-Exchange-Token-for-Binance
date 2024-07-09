import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";

actor Token{
  Debug.print("Hello");

  var owner : Principal = Principal.fromText("mibcp-5zgxn-62soh-f4ozg-4elje-toh5d-rcs33-w7tko-vtepx-c2maq-bqe");  
  var totalSupply : Nat = 1000000000;
  var symbol : Text = "DPAR";

  private stable var balanceEntries: [(Principal, Nat)] = [];
  private var balances = HashMap.HashMap<Principal, Nat> (1, Principal.equal, Principal.hash);
  if(balances.size() < 1){                //Just in case we never upgraded the program, we give owner some initial tokens to work with
    balances.put(owner, totalSupply);
  };

  public query func balanceOf(who: Principal): async Nat{

    // if(balances.get(who) == null){
    //     return 0;
    // } else {
    //     return balances.get(who);
    // };

    let balance : Nat = switch (balances.get(who)) {
        case null 0;
        case (?result) result;
    };
    return balance;
  };

  public query func getSymbol(): async Text{
    return symbol;
  };
  
  public shared(msg) func payOut(): async Text{
    Debug.print(debug_show(msg.caller)); //prints Principal ID of the caller
    if(balances.get(msg.caller) == null){
      let amount = 10000;
      // balances.put(msg.caller,amount); // Only for understanding working of caller function
      let result = await transfer(msg.caller, amount);
      return result;
    } else {
      return "Already claimed";
    }
  };

  public shared(msg) func transfer(to : Principal, amount : Nat) : async Text{
    // let result = await payOut();
    let fromBalance = await balanceOf(msg.caller);
    if(fromBalance > amount ){
      let newFromBalance : Nat = fromBalance - amount;
      balances.put(msg.caller,newFromBalance); 

      let toBalance = await balanceOf(to);
      let newToBalance = toBalance + amount;
      balances.put(to, newToBalance);
      return "success";
    } else {
      return "insufficient funds";
    }
  };

  system func preupgrade(){
    balanceEntries := Iter.toArray(balances.entries());
  };
  
  system func postupgrade(){
    balances := HashMap.fromIter<Principal,Nat>(Iter.fromArray(balanceEntries), 1, Principal.equal, Principal.hash);
    // balances := HashMap.fromIter<Principal,Nat>(balanceEntries.val(), 1, Principal.equal, Principal.hash); //Error: field val does not exist in type[(Principal, Nat)]Motoko(M0072)
    if(balances.size() < 1){
      balances.put(owner, totalSupply);
    };
  }

};
