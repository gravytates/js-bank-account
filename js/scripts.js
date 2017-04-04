// BACK END

function User(name, balance) {
  this.name = name;
  this.balance = balance;
}

User.prototype.updateUserAccount = function(deposit, withdraw) {
  return this.balance + deposit - withdraw;
}

function AcctList() {
  this.accountsArray = [];
}

AcctList.prototype.updateAcctList = function(userObj) {
  console.log("this.accountsArray[lastthing]" , this.accountsArray[0]);
  console.log("this.accountsArray : " , this.accountsArray);
  return this.accountsArray.unshift(userObj);
}



// FRONT END
$(document).ready(function() {

  // create master account list
  var newAcctList = new AcctList();


  $("#registerForm").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var initialDeposit = $("#initialDeposit").val();
    // console.log("whatever");
    var newAccount = new User(name, initialDeposit);
    // Add new account to master account list
    newAcctList.updateAcctList(newAccount);

    $("span#current-balance").text("");
    $("span#current-balance").append("$" + newAccount.balance);
  });


  $("#interactForm").click(function() {
    var depositInput = parseInt($("#deposit-amount").val());
    var withdrawalInput = parseInt($("#withdrawal-amount").val());
    var newBalance = newAcctList.updateAccountList[0].updateUserAccount(depositInput, withdrawalInput);
    $("span#current-balance").append("$" + newBalance);
  });


});
