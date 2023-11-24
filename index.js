var formSteps = document.querySelectorAll("#steps");
var nextBtn = document.querySelectorAll(".next-step");
var previousBtn = document.querySelectorAll(".prev-step");
var progressBar = document.querySelectorAll(".progress");

let formStepNum = 0;

nextBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        
        var inputs = [...document.querySelectorAll("input")];
        var allValid = inputs.every(input => input.reportValidity());

        if (allValid && validatePhone()) {
            formStepNum++;
            
            updateFormStep();
        }
    })
})


previousBtn.forEach((prevBtn) => {
    prevBtn.addEventListener("click", () => {
        formStepNum--;
        updateFormStep();
    })
})

for (var i = 0; i < 1; i++) {
    var returnToPlan = document.querySelector(".go-to-plan");
    returnToPlan.addEventListener("click", () => {
        formStepNum -= 2;
        
        updateFormStep();
    })
}

function updateFormStep() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("active-step") &&
            formStep.classList.remove("active-step");
    });

    formSteps[formStepNum].classList.add("active-step");

    progressBar.forEach((progress) => {
        progress.classList.contains("sidebar-active") &&
            progress.classList.remove("sidebar-active");
    });

    progressBar[formStepNum].classList.add("sidebar-active");
}

var phoneError = document.querySelectorAll(".error")[2];

function validatePhone() {
    var phoneNumber = document.querySelector("#phone").value;

    if (phoneNumber.length == 0) {
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if (phoneNumber.length !== 11) {
        phoneError.innerHTML = "Phone number should be 11 digits";
        return false;
    }
    if (!phoneNumber.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = "Should contain only digits";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #37fb44;"></i>';
    return true;
}




// --------------------------------------step-2------------------------------------------------------

var planCards = document.querySelectorAll(".plan-card");
var selectedPlan = document.querySelector(".selected-plan");
var toggleSwitch = document.querySelectorAll("input")[3];
var planName = document.querySelector(".plan-name");
var planPrice = document.querySelector(".selected-plan-price");
var subDuration = " (Monthly)";

planCards.forEach((planCard) => {
    planCard.addEventListener("click", () => {
        planCards.forEach(element => element.classList.remove("selected-plan"));
        planCard.classList.add("selected-plan");

        var planCardName = document.querySelector(".selected-plan").children[1].children[0].innerText;
        var planCardPrice = document.querySelector(".selected-plan").children[1].children[1].innerText;

        planName.innerText = planCardName + subDuration;
        planPrice.innerText = planCardPrice;

    });

})

// toggle-switch section

var planPriceOne = document.querySelectorAll(".plan-price")[0];
var planPriceTwo = document.querySelectorAll(".plan-price")[1];
var planPriceThree = document.querySelectorAll(".plan-price")[2];

var addOnPriceOne = document.querySelectorAll(".add-on-price")[0];
var addOnPriceTwo = document.querySelectorAll(".add-on-price")[1];
var addOnPriceThree = document.querySelectorAll(".add-on-price")[2];
var allCheckBoxes = document.querySelectorAll("#checkbox");
var allLabel = document.querySelectorAll("label");
var totalDuration = document.querySelector(".total").children[0];

var toggled = false;

toggleSwitch.addEventListener("click", () => {

    if (toggled === false) {

        allCheckBoxes.forEach((checkBox) => {
            checkBox.checked = false;
            checkBox.removeAttribute("data-clicked");
            priceArray.length = 0;
            textArray.length = 0;
            document.querySelector(".service-price").innerHTML = priceArray;
            document.querySelector(".selected-ad-on").innerHTML = textArray;

        })
        allLabel.forEach((label) => {
            label.classList.remove("checked");
        })

        var yearlyIncentive = document.querySelectorAll(".yearly-incentive");
        subDuration = " (Yearly)";
        yearlyIncentive.forEach((plan) => {
            plan.classList.remove("hide");
        })

        planPriceOne.innerText = "$90/yr";
        planPriceTwo.innerText = "$120/yr";
        planPriceThree.innerText = "$150/yr";

        addOnPriceOne.innerText = "+$10/yr";
        addOnPriceTwo.innerText = "+$20/yr";
        addOnPriceThree.innerText = "+$20/yr";

        totalDuration.innerText = "Total (per year)";

        toggled = true;
    } else {

        allCheckBoxes.forEach((checkBox) => {
            checkBox.checked = false;
            checkBox.removeAttribute("data-clicked");
            priceArray.length = 0;
            textArray.length = 0;
            document.querySelector(".service-price").innerHTML = priceArray;
            document.querySelector(".selected-ad-on").innerHTML = textArray;

        })
        allLabel.forEach((label) => {
            label.classList.remove("checked");
        })

        var yearlyIncentive = document.querySelectorAll(".yearly-incentive");
        subDuration = " (Monthly)";
        yearlyIncentive.forEach((plan) => {
            plan.classList.add("hide");
        })

        planPriceOne.innerText = "$9/yr";
        planPriceTwo.innerText = "$12/yr";
        planPriceThree.innerText = "$15/yr";

        addOnPriceOne.innerText = "+$1/yr";
        addOnPriceTwo.innerText = "+$2/yr";
        addOnPriceThree.innerText = "+$2/yr";

        totalDuration.innerText = "Total (per month)";

        toggled = false;
    }
})

var stepTwoNextBtn = document.querySelectorAll(".next-step")[2];
stepTwoNextBtn.addEventListener("click", () => {
    var planCardName = document.querySelector(".selected-plan").children[1].children[0].innerText;
    var planCardPrice = document.querySelector(".selected-plan").children[1].children[1].innerText;

    planName.innerText = planCardName + subDuration;
    planPrice.innerText = planCardPrice;
})

//-------------------------------------------- step-3------------------------------------------------

var addOns = document.querySelectorAll(".add-ons");

var checkAddOnOne = document.querySelectorAll("#checkbox")[0];
var checkAddOnTwo = document.querySelectorAll("#checkbox")[1];
var checkAddOnThree = document.querySelectorAll("#checkbox")[2];


var addOnContainerFc = document.querySelector(".selected-ad-on");

var textArray = new Array();
var priceArray = new Array();
var priceArrayTwo = new Array()

for (element of addOns) {
    element.addEventListener("click", () => {
        var selectedAddOn = event.target;
        var addOnTextOne = document.querySelectorAll(".description")[0].children[0].innerText;
        var addOnTextTwo = document.querySelectorAll(".description")[1].children[0].innerText;
        var addOnTextThree = document.querySelectorAll(".description")[2].children[0].innerText;
        var onlineService = "<span>" + addOnTextOne + "</span>";
        var largerStorage = "<span>" + addOnTextTwo + "</span>";
        var customProfit = "<span>" + addOnTextThree + "</span>";
        var onlineIndex = textArray.indexOf(onlineService);
        var largerStorageIndex = textArray.indexOf(largerStorage);
        var customProfitIndex = textArray.indexOf(customProfit);

        var priceList = document.querySelector(".service-price");
        var priceOne = document.querySelectorAll(".add-on-price")[0].innerText;
        var priceTwo = document.querySelectorAll(".add-on-price")[1].innerText;
        var priceThree = document.querySelectorAll(".add-on-price")[2].innerText;
        var onlineServicePrice = "<span>" + priceOne + "</span>";
        var lagerStoragePrice = "<span>" + priceTwo + "</span>";
        var customProfitPrice = "<span>" + priceThree + "</span>";
        var onlinePriceIndex = priceArray.indexOf(onlineServicePrice);
        var lagerStoragePriceIndex = priceArray.indexOf(lagerStoragePrice);
        var customProfitPriceIndex = priceArray.indexOf(customProfitPrice);

        if (checkAddOnOne.checked == true && selectedAddOn.contains(checkAddOnOne) && !checkAddOnOne.dataset.clicked) {
            checkAddOnOne.setAttribute("data-clicked", "true")
            document.querySelectorAll("label")[4].classList.add("checked");
            textArray.push(onlineService);
            addOnContainerFc.innerHTML = textArray.join("");

            priceArray.push(onlineServicePrice);
            priceList.innerHTML = priceArray.join("");

        } else if (checkAddOnOne.checked == false && selectedAddOn.contains(checkAddOnOne) && checkAddOnOne.dataset.clicked) {
            checkAddOnOne.removeAttribute("data-clicked");
            document.querySelectorAll("label")[4].classList.remove("checked");
            textArray.splice(onlineIndex, 1);
            addOnContainerFc.innerHTML = textArray.join("");

            priceArray.splice(onlinePriceIndex, 1);
            priceList.innerHTML = priceArray.join("");

        } else if (checkAddOnTwo.checked == true && selectedAddOn.contains(checkAddOnTwo) && !checkAddOnTwo.dataset.clicked) {
            checkAddOnTwo.setAttribute("data-clicked", "true")
            document.querySelectorAll("label")[5].classList.add("checked");
            textArray.push(largerStorage);
            addOnContainerFc.innerHTML = textArray.join("");

            priceArray.push(lagerStoragePrice);
            priceList.innerHTML = priceArray.join("");

        } else if (checkAddOnTwo.checked == false && selectedAddOn.contains(checkAddOnTwo) && checkAddOnTwo.dataset.clicked) {
            checkAddOnTwo.removeAttribute("data-clicked");
            document.querySelectorAll("label")[5].classList.remove("checked");
            textArray.splice(largerStorageIndex, 1);
            addOnContainerFc.innerHTML = textArray.join("");

            priceArray.splice(lagerStoragePriceIndex, 1);
            priceList.innerHTML = priceArray.join("");

        } else if (checkAddOnThree.checked == true && selectedAddOn.contains(checkAddOnThree) && !checkAddOnThree.dataset.clicked) {
            checkAddOnThree.setAttribute("data-clicked", "true")
            document.querySelectorAll("label")[6].classList.add("checked");
            textArray.push(customProfit);
            addOnContainerFc.innerHTML = textArray.join("");

            priceArray.push(customProfitPrice);
            priceList.innerHTML = priceArray.join("");

        } else if (checkAddOnThree.checked == false && selectedAddOn.contains(checkAddOnThree) && checkAddOnThree.dataset.clicked) {
            checkAddOnThree.removeAttribute("data-clicked");
            document.querySelectorAll("label")[6].classList.remove("checked");
            textArray.splice(customProfitIndex, 1);
            addOnContainerFc.innerHTML = textArray.join("");

            priceArray.splice(customProfitPriceIndex, 1);
            priceList.innerHTML = priceArray.join("");

        }

    });
}

var stepThreeNextBtn = document.querySelectorAll(".next-step")[2];
var total = document.querySelector(".total").children[1];
var checkBoxes = document.querySelector("#checkbox");


stepThreeNextBtn.addEventListener("click", () => {
    var planAddedPrice = document.querySelector(".selected-plan-price").innerText;

    if (checkAddOnOne.dataset.clicked || checkAddOnTwo.dataset.clicked || checkAddOnThree.dataset.clicked) {

        var allAddonPrice = document.querySelector(".service-price").innerText;
        var stringExtract = allAddonPrice.match(/\d+/g);
        var numberArray = stringExtract.map(function (val) { return parseFloat(val) });

        var planStringExtract = planAddedPrice.match(/\d+/g);
        var planNumber = planStringExtract.map(function (val) { return parseFloat(val) });

        numberArray = [...numberArray, ...planNumber];


        var result = numberArray.reduce((total, current) => total + current, 0);
        total.innerText = "$" + result + "/mo";

    } else {

        total.innerText = planAddedPrice;

    }

})