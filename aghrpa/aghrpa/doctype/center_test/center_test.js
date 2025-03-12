// Copyright (c) 2025, Aly Zoogy and contributors
// For license information, please see license.txt

frappe.ui.form.on("Center Test", {
	
    refresh(frm) {
        frm.add_custom_button('say hi', ()=>{
            frappe.prompt('enter center name',({value})=>{
                if(value){
                    frm.set_value('center_name',value)
                    frm.refresh_value('center_name')
                    frappe.msgprint(__('your center is ${center_name}'));
                   // frappe.throw("ggghghgg");
                    
                }
            })
        });
        frm.add_custom_button('say hi1', ()=>{
            console.log('hi1')
        },"My Action");
        frm.add_custom_button('say hi2', ()=>{
            console.log('hi2')
        },"My Action");
        frm.add_custom_button('say hi3', ()=>{
           frappe.msgprint(__('hi3'));
            console.log('hi3');
        },"My Action");

	},
    // treasuries_on_form_rendered: function(frm) {
	// 	frappe.msgprint("Hello D-codE from 'family_members' child table rendered event")
	// },
    before_submit: function(frm) {
		frappe.throw("Hello D-codE from 'before_submit' event")
	}
	
});

frappe.ui.form.on("treasuries", {
    center_treasury_name(frm, cdt, cdn){
		frappe.msgprint("Hello D-codE from child fide table")
    }


})
