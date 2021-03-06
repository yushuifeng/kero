u.MonthAdapter = u.BaseAdapter.extend({
    initialize: function (comp, options) {
        var self = this;
        u.MonthAdapter.superclass.initialize.apply(this, arguments);
        this.validType = 'month';

        this.comp = new u.Month(this.element);


        this.comp.on('valueChange', function(event){
            self.slice = true;
            self.dataModel.setValue(self.field, event.value);
            self.slice = false;
            //self.setValue(event.value);
        });
        this.dataModel.ref(this.field).subscribe(function(value) {
            self.modelValueChange(value)
        })


    },
    modelValueChange: function (value) {
        if (this.slice) return;
        this.comp.setValue(value);
    },
    setEnable: function (enable) {
    }
});

u.compMgr.addDataAdapter(
    {
        adapter: u.MonthAdapter,
        name: 'u-month'
    });




