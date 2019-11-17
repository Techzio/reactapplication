import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

 function RenderDish({dish})
    {
        if (dish != null)
            return(
                <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

   function RenderComments({dish})
    {
        if (dish != null)
            {
            const comment = dish.comments.map((comment)=>{
                 return(
                     <li>
                     <p>{comment.comment}</p>
                     <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                     </li>
                 )               
            });
            return(           
                <ul className = "list-unstyled">
                <h4>Comments</h4>
                {comment}
                </ul>
            );
            }
        else
            return(
                <div></div>
            )
     }

     const DishDetail = (props) => {

        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                <div className="col-12 col-md-5 m-1">
                    <RenderComments dish={props.dish} />
                </div>
                </div>
            </div>
            
        );
}
export default DishDetail;