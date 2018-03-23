.revws-hidden {
  display: none;
}

.revws-grading {
  display: flex;
  cursor: default;
  touch-action: none;
}
a .revws-grading {
  cursor: pointer;
}

.revws-grade-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.revws-grading-product .revws-grade-wrap {
  padding-left: {$cssSettings.shapeSize.product / 8}px;
  padding-right: {$cssSettings.shapeSize.product / 8}px;
}

.revws-grading-list .revws-grade-wrap {
  padding-left: {$cssSettings.shapeSize.list / 8}px;
  padding-right: {$cssSettings.shapeSize.list / 8}px;
}

.revws-grading-create .revws-grade-wrap {
  padding-left: {$cssSettings.shapeSize.create / 8}px;
  padding-right: {$cssSettings.shapeSize.create / 8}px;
}

.revws-grading-product .revws-grade {
  width: {$cssSettings.shapeSize.product}px;
  height: {$cssSettings.shapeSize.product}px;
}

.revws-grading-list .revws-grade {
  width: {$cssSettings.shapeSize.list}px;
  height: {$cssSettings.shapeSize.list}px;
}

.revws-grading-create .revws-grade {
  width: {$cssSettings.shapeSize.create}px;
  height: {$cssSettings.shapeSize.create}px;
}

.revws-grade {
  transition: all 200ms linear;
  stroke-width: {$cssSettings.shape.strokeWidth};
}

.revws-grade path {
  transition: fill 250ms ease;
}

.revws-grade-off path {
  fill: {$cssSettings.colors.fillColorOff};
  stroke: {$cssSettings.colors.borderColorOff};
}

.revws-grade-on path {
  fill: {$cssSettings.colors.fillColor};
  stroke: {$cssSettings.colors.borderColor};
}

.revws-grade-highlight path {
  fill: {$cssSettings.colors.fillColorHigh};
  stroke: {$cssSettings.colors.borderColorHigh};
}

/* review layout */
#revws-tab-content {
  margin: 0 0 20px 0;
}

.revws-review-list {
  position: relative;
}

.revws-loading {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.5;
}
.revws-loading-spinner {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}

.revws-under-review {
  color: red;
  font-size: 12px;
  margin-top: -10px;
}

.revws-review {
  margin: 10px 0px;
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}

.revws-review:first-child {
  border-top: none;
}

@media (min-width: 768px) {
  .revws-review-author {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #revws-tab-content .revws-grading {
    margin: 20px 0px;
  }
}

@media (max-width: 768px) {
  .revws-review-author {
    display: flex;
    flex-direction: row;
  }
  #revws-tab-content .revws-grading {
    margin: 0px 20px;
  }
}

.revws-review-author-name {
  color: #222;
  font-size: 12px;
}

.revws-verified-buyer-badge {
  display: flex;
  margin-top: 5px;
  font-weight: 500;
  color: green;
  font-size: 12px;
  line-height: 16px;
}

.revws-verified-buyer-badge:before {
  content: '';
  background:url('{$cssSettings.imgs}/verified-buyer-badge.svg');
  width: 14px;
  height: 14px;
  margin-right: 5px;
  display: inline-block;
}

.revws-review-date {
  color: #999;
  font-size: 12px;
}

@media (min-width: 768px) {
  .revws-review-details {
    border-left: 1px solid #f5f5f5;
    padding-left: 30px;
  }
}

.revws-review-title {
  color: #222;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}

.revws-review-content {
  color: #666;
  padding: 10px 0px;
  font-size: 14px;
}

.revws-actions {
  display: flex;
  color: #999;
  font-size: 12px;
}

.revws-actions .btn {
  color: #999;
  font-size: 12px;
  padding: 3px 6px;
}

.revws-actions .btn:hover {
  color: #222;
  text-decoration: none;
}

.revws-actions .revws-report:first-child .btn,
.revws-actions .revws-delete:first-child .btn {
  padding-left: 0px;
}

.revws-action:not(:last-child) {
  border-right: 1px solid #f5f5f5;
  padding-right: 10px;
  margin-right: 10px;
}

.revws-paging {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 48px;
}

.revws-page-prev, .revws-page-next {
  cursor: pointer;
  width: 48px;
  height: 48px;
}

.revws-page-prev svg, .revws-page-next svg {
  margin: 12px;
  fill: rgba(0, 0, 0, 0.54);
}

.revws-disabled svg {
  fill: rgba(0, 0, 0, 0.26);
}

/* product extra - right panel */
 #revws-product-extra,
 #revws-product-buttons,
 .revws-product-extra-link,
 .revws-product-buttons-link {
  display: flex;
  flex-direction: row;
  align-items: center;
}

#revws-product-extra b,
#revws-product-buttons b,
.revws-product-list .revws-grading,
.revws-comparison .revws-grading,
.revws-product-buttons-link .revws-grading,
.revws-product-extra-link .revws-grading {
  margin-right: 10px;
  flex-grow: 0;
  flex-shrink: 0;
}

.revws-count-text {
  flex-grow: 1;
  flex-shrink: 1;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}

.revws-product-list, .revws-product-list a, .revws-comparison {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.revws-product-list a {
  max-width: 100%;
  overflow: hidden;
}

.revws-product-list-empty {
  display: none;
}

.revws-replies {
  width: 100%;
  padding: 20px;
  background-color: #EBF3F8;
  margin-top: 10px;
  font-size: 90%;
  color: #777;
}

.revws-reply-title {
  font-weight: 500;
  color: #444;
  margin-bottom: 10px;
}

.revws-review-with-product {
  display: flex;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
}

.revws-review-with-product .revws-review-wrapper {
  width: 100%;
  padding-left: 40px;
}

.revws-review-with-product .revws-review {
  margin-top: 30px;
  border: 1px solid #f5f5f5;
}

.revws-review-requests {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 40px;
}

.revws-review-request {
  padding: 20px;
  cursor: pointer;
  transition: all 350ms ease;
  transform: scale(0.9);
}

.revws-review-request:hover {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  transform: scale(1);
}

.revws-review-request-name {
  margin-top: 10px;
  text-align: center;
}
