// Copyright (c) 2025, Aly Zoogy and contributors
// For license information, please see license.txt

frappe.ui.form.on("for test", {
       // after_save:function(frm){
		// frappe.msgprint(__("The full name is '{0}'",
		// 		[frm.doc.first_name +frm.doc.last_name]))}
	
        after_save:function(frm){
                frappe.msgprint(__("the full name is '{0}'",[frm.doc.first_name +" "+ frm.doc.last_name]))
        }
// 	refresh(frm) {
//         frappe.msgprint("  رسالتك هى ")
//        // frappe.throw("ggghghgg");
// 	},


});
