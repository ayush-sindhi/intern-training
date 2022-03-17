import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddEntry } from '../actions/Actions'

function Blog() {

    const [title,settitle]=useState('')
    const [author,setauthor]=useState('')
    const [date,setdate]=useState('')
    const [category,setcategory]=useState('')
    const [count,setcount]=useState('')
    const [commnt,setcommnt]=useState('')
    const dispatch=useDispatch();

    const handler=()=>{
    dispatch(AddEntry({
        Blogtitel:title,
        Id:count,
        Likes:0,
        Comment:[ {
        Date:date,
        Comment:commnt,
        catogery:category,
        commentby:author
        }]
        }));
        setcount(count+1);
        settitle('')
        setauthor('')
        setcategory('')
        setcommnt('')
        setdate('')

  }

  return (
    <>
    <div class="row ">
        <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
                <div class="card-body bg-light">
                    <div class="container">
                        <form id="contact-form">
                            <div class="controls">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_name">Title *</label> <input id="form_name" type="text" name="name" class="form-control" placeholder="Title *" value={title} required="required" data-error="Title is required." onChange={(e)=>settitle(e.target.value)}/> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_lastname">Author *</label> <input id="form_lastname" type="text" name="surname" class="form-control" value={author} placeholder="Author Name *" required="required" data-error="Author is required." onChange={(e)=>setauthor(e.target.value)}/> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_email">Post Date *</label> <input id="form_date" type="date" name="date" class="form-control" value={date} placeholder="Please enter post date *" required="required" data-error="Valid date is required." onChange={(e)=>setdate(e.target.value)} /> </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group"> <label for="form_need">Post Category *</label> <select id="form_need" name="need" class="form-control" required="required" value={category} data-error="Please specify your category." onChange={(e)=>setcategory(e.target.value)}>
                                                <option value="" selected disabled>--Select Your Issue--</option>
                                                <option>General</option>
                                                <option>Sports</option>
                                                <option>Human Welfare</option>
                                                <option>Other</option>
                                            </select> </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group"> <label for="form_message">Content *</label> <textarea id="form_message" name="message" class="form-control" value={commnt} placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message." onChange={(e)=>setcommnt(e.target.value)}></textarea> </div>
                                    </div>
                                    <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " value="Submit" onSubmit={handler}/> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>
    </div>

    </>
  )
}

export default Blog