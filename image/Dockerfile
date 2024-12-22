FROM public.ecr.aws/lambda/python:3.13

# Copy requirements.txt file
COPY requirements.txt ${LAMBDA_TASK_ROOT}

# Install the dependencies
RUN pip install -r requirements.txt --upgrade

# For local testing
EXPOSE 8000

# Set IS_USING_IMAGE_RUNTIME Environment Variable
ENV IS_USING_IMAGE_RUNTIME=True

# Copy all files in ./scr
COPY src/* ${LAMBDA_TASK_ROOT}
COPY src/app ${LAMBDA_TASK_ROOT}/app

