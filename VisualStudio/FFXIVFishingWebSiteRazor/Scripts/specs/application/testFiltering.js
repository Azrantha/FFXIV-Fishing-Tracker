var expect = chai.expect;



describe('JQuery and Mocha', function() {
    it('Can find hidden table', function () {
        expect($("#fishTable")).to.exist;
    });
});

describe('Filtering.js', function () {
    beforeEach(function (done) {
        // Reset the values in the table before each test.
        $("tr#1").addClass("caught");
        $("tr#1").removeClass("hidden");
        $("tr#1").removeClass("filtered");
        $("tr#1 .fishRowCaught").prop("checked", true);

        $("tr#2").removeClass("caught");
        $("tr#2").removeClass("hidden");
        $("tr#2").removeClass("filtered");
        $("tr#2 .fishRowCaught").prop("checked", false);

        $("tr#4").removeClass("caught");
        $("tr#4").removeClass("hidden");
        $("tr#4").removeClass("filtered");
        $("tr#4 .fishRowCaught").prop("checked", false);

        $("#hideCaughtToggle").prop("checked", false);

        $("#selectPatch").val("none");
        done();
    })


    it('Checking the input in a fishRow adds the caught class on the respective row', function (done) {
        expect($("tr#2").attr("class")).to.equal("fishRow");
        $("tr#2 .fishRowCaught").prop("checked", true).change();
        setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
            expect($("tr#2").attr("class")).to.equal("fishRow caught");
            done();
        }, 10);
    });


    it('Unchecking the input in a fishRow removes the caught class on the respective row', function (done) {
        expect($("tr#1").attr("class")).to.equal("fishRow caught");
        $("tr#1 .fishRowCaught").prop("checked", false).change();
        setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
            expect($("tr#1").attr("class")).to.equal("fishRow");
            done();
        }, 10); 
    });


    it('Checking and then Unchecking the input in a fishRow adds and then removes the caught class on the respective row', function (done) {
        expect($("tr#2").attr("class")).to.equal("fishRow");
        $("tr#2 .fishRowCaught").prop("checked", true).change();
        setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
            expect($("tr#2").attr("class")).to.equal("fishRow caught");
            $("tr#1 .fishRowCaught").prop("checked", false).change();
            setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
                expect($("tr#1").attr("class")).to.equal("fishRow");
                done();
            }, 10);
        }, 10);
    });


    it('Checking the hide caught checkbox should attach the hidden class to caught rows, but not to uncaught rows', function (done) {
        expect($("tr#1").attr("class")).to.equal("fishRow caught");
        expect($("tr#2").attr("class")).to.equal("fishRow");
        $("#hideCaughtToggle").prop("checked", true).change();
        setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
            expect($("tr#1").attr("class")).to.equal("fishRow caught hidden");
            expect($("tr#2").attr("class")).to.equal("fishRow");
            done();
        }, 10);
    });


    it('Changing the patch filter to 3 should add the class filtered to all fish not introduced in patches 3.x', function (done) {
        expect($("tr#1").attr("class")).to.equal("fishRow caught");
        expect($("tr#2").attr("class")).to.equal("fishRow");
        expect($("tr#4").attr("class")).to.equal("fishRow");
        $("#selectPatch").val("3").change();
        setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
            expect($("tr#1").attr("class")).to.equal("fishRow caught");
            expect($("tr#2").attr("class")).to.equal("fishRow");
            expect($("tr#4").attr("class")).to.equal("fishRow filtered");
            done();
        }, 10);
    });


    it('Changing the patch filter to 2 should add the class filtered to not introduced in patches 2.x', function (done) {
        expect($("tr#1").attr("class")).to.equal("fishRow caught");
        expect($("tr#2").attr("class")).to.equal("fishRow");
        expect($("tr#4").attr("class")).to.equal("fishRow");
        $("#selectPatch").val("2").change();
        setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
            expect($("tr#1").attr("class")).to.equal("fishRow caught filtered");
            expect($("tr#2").attr("class")).to.equal("fishRow filtered");
            expect($("tr#4").attr("class")).to.equal("fishRow");
            done();
        }, 10);
    });


    it('Changing the patch filter multiple times should remove/re-apply the filtered property appropriately', function (done) {
        expect($("tr#1").attr("class")).to.equal("fishRow caught");
        expect($("tr#2").attr("class")).to.equal("fishRow");
        expect($("tr#4").attr("class")).to.equal("fishRow");
        $("#selectPatch").val("2").change();
        setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
            expect($("tr#1").attr("class")).to.equal("fishRow caught filtered");    //patch 3.3 - should be filtered
            expect($("tr#2").attr("class")).to.equal("fishRow filtered");           //patch 3.0 - should be filtered
            expect($("tr#4").attr("class")).to.equal("fishRow");                    //patch 2.2 - should not be filtered
            $("#selectPatch").val("3").change();
            setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
                expect($("tr#1").attr("class")).to.equal("fishRow caught");         //patch 3.3 - should not be filtered
                expect($("tr#2").attr("class")).to.equal("fishRow");                //patch 3.0 - should not be filtered
                expect($("tr#4").attr("class")).to.equal("fishRow filtered");       //patch 2.2 - should be filtered
                $("#selectPatch").val("none").change();
                setTimeout(function () { //wait 10ms before checking result to allow time for jquery event to execute
                    expect($("tr#1").attr("class")).to.equal("fishRow caught");
                    expect($("tr#2").attr("class")).to.equal("fishRow");
                    expect($("tr#4").attr("class")).to.equal("fishRow");
                    done();
                }, 10);
            }, 10);
        }, 10);
    });
});